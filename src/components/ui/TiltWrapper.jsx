import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltWrapper = ({ 
    children, 
    className = "", 
    intensity = 10, // Max rotation angle
    springConfig = { damping: 20, stiffness: 100, mass: 0.5 },
    scaleOnHover = 1.02
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            className={`cursor-pointer ${className}`}
            style={{ perspective: 1500 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: scaleOnHover }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <motion.div
                className="w-full h-full"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default TiltWrapper;
