import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const BreathingShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPulse: { value: 0 },
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
      
      // Breathing Pulse Logic (colors)
      // Base dark charcoal
      vec3 colorA = vec3(0.05, 0.05, 0.05); 
      // Subtle brand red glow
      vec3 colorB = vec3(0.3, 0.0, 0.0); 
      
      // Mix based on pulse and ripple
      float mixValue = uPulse * 0.3 + ripple * 0.5;
      vec3 finalColor = mix(colorA, colorB, clamp(mixValue, 0.0, 1.0));
      
      // Add some subtle grain
      finalColor += noise(uv + uTime) * 0.02;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const ShaderPlane = () => {
  const meshRef = useRef();
  const { size } = useThree();
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uPulse: { value: 0 },
  }), [size]);

  useFrame((state) => {
    const { clock } = state;
    const t = clock.getElapsedTime();
    
    // 4-7-8 Breathing Implementation
    // Total cycle = 19 seconds
    const cycle = t % 19.0;
    let pulse = 0.0;
    
    if (cycle < 4.0) {
      // Inhale (4s) - Linear ramp up
      pulse = cycle / 4.0;
    } else if (cycle < 11.0) {
      // Hold (7s) - Stay at peak
      pulse = 1.0;
    } else {
      // Exhale (8s) - Smoother ramp down
      pulse = 1.0 - ((cycle - 11.0) / 8.0);
    }
    
    uniforms.uTime.value = t;
    uniforms.uPulse.value = pulse;
  });

  const handlePointerMove = (e) => {
    uniforms.uMouse.value.set(e.uv.x, e.uv.y);
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
