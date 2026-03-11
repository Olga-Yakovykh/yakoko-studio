import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedSectionProps {
    children: React.ReactNode;
    yOffset?: number;
    scaleOffset?: number;
    darken?: boolean;
}

export const StackedSection = ({
    children,
    yOffset = -50,
    scaleOffset = 0.95,
    darken = true,
}: StackedSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 1],
        [1, darken ? 0.5 : 1]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, scaleOffset]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, yOffset]
    );

    return (
        <div ref={containerRef} className="relative w-full origin-top">
            <motion.div
                style={{
                    y,
                    scale,
                    opacity,
                    position: "sticky",
                    top: 0,
                    zIndex: 0,
                }}
                className="w-full h-full bg-background"
            >
                {children}
            </motion.div>
        </div>
    );
};
