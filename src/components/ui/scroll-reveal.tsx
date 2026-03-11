import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    amount?: "some" | "all" | number;
    duration?: number;
    blur?: boolean;
}

export const ScrollReveal = ({
    children,
    className,
    delay = 0,
    direction = "up",
    amount = 0.2,
    duration = 0.8,
    blur = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    const getInitialProperties = () => {
        let y = 0;
        let x = 0;

        switch (direction) {
            case "up":
                y = 40;
                break;
            case "down":
                y = -40;
                break;
            case "left":
                x = 40;
                break;
            case "right":
                x = -40;
                break;
            case "none":
                break;
        }

        return { x, y, opacity: 0, filter: blur ? "blur(10px)" : "blur(0px)" };
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialProperties()}
            animate={
                isInView
                    ? { x: 0, y: 0, opacity: 1, filter: "blur(0px)" }
                    : getInitialProperties()
            }
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // easeOut
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
