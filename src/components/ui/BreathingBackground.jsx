import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const BreathingShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPulse: { value: 0 },
    uColorA: { value: new THREE.Color('#0A0A0B') },
    uColorB: { value: new THREE.Color('#10B981') },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uPulse;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;

    // Simple noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      
      // Calculate mouse disturbance
      float dist = distance(uv, uMouse);
      float ripple = sin(dist * 20.0 - uTime * 2.0) * exp(-dist * 5.0) * 0.1;
      
      // Mixing logic
      float mixValue = uPulse * 0.2 + ripple * 0.3;
      vec3 finalColor = mix(uColorA, uColorB, clamp(mixValue, 0.0, 0.4));
      
      // Add subtle grain
      finalColor += noise(uv + uTime) * 0.01;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const ShaderPlane = () => {
  const meshRef = useRef();
  const { size } = useThree();
  const { activeTheme } = useTheme();
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uPulse: { value: 0 },
    uColorA: { value: new THREE.Color(activeTheme.colors.bg) },
    uColorB: { value: new THREE.Color(activeTheme.colors.primary) },
  }), [size]);

  useEffect(() => {
    uniforms.uColorA.value.set(activeTheme.colors.bg);
    uniforms.uColorB.value.set(activeTheme.colors.primary);
  }, [activeTheme, uniforms]);

  useFrame((state) => {
    const { clock } = state;
    const t = clock.getElapsedTime();
    
    // 4-7-8 Breathing Implementation
    const cycle = t % 19.0;
    let pulse = 0.0;
    
    if (cycle < 4.0) {
      pulse = cycle / 4.0;
    } else if (cycle < 11.0) {
      pulse = 1.0;
    } else {
      pulse = 1.0 - ((cycle - 11.0) / 8.0);
    }
    
    uniforms.uTime.value = t;
    uniforms.uPulse.value = pulse;
  });

  const handlePointerMove = (e) => {
    if (e.uv) uniforms.uMouse.value.set(e.uv.x, e.uv.y);
  };

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={BreathingShaderMaterial.vertexShader}
        fragmentShader={BreathingShaderMaterial.fragmentShader}
      />
    </mesh>
  );
};

const BreathingBackground = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 -z-50 pointer-events-auto ${className}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
};

export default BreathingBackground;
