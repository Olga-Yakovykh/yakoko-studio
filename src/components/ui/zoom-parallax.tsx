"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect - exactly 7 images is recommended for the default layout */
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check on mount
        checkMobile();

        // Add resize listener
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Base scales for desktop based on the reference
    const desktopScaleMax = [4, 5, 6, 8, 9];
    // Substantially reduced scales for mobile to prevent wild stretching and horizontal overlap
    const mobileScaleMax = [1.5, 1.8, 2.0, 2.5, 3.0];

    const currentMax = isMobile ? mobileScaleMax : desktopScaleMax;

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, currentMax[0]]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, currentMax[1]]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, currentMax[2]]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, currentMax[3]]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, currentMax[4]]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} className="relative h-[200vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    // Use slightly smaller layout blocks for mobile
                    const layoutStyles = isMobile ? [
                        "", // Center
                        "[&>div]:!-top-[20vh] [&>div]:!left-[5vw] [&>div]:!h-[20vh] [&>div]:!w-[45vw]", // Top Left
                        "[&>div]:!-top-[10vh] [&>div]:!-left-[35vw] [&>div]:!h-[35vh] [&>div]:!w-[25vw]", // Left
                        "[&>div]:!left-[30vw] [&>div]:!h-[20vh] [&>div]:!w-[30vw]", // Right
                        "[&>div]:!top-[25vh] [&>div]:!left-[10vw] [&>div]:!h-[20vh] [&>div]:!w-[35vw]", // Bottom Left
                        "[&>div]:!top-[25vh] [&>div]:!-left-[25vw] [&>div]:!h-[20vh] [&>div]:!w-[40vw]", // Bottom
                        "[&>div]:!top-[20vh] [&>div]:!left-[35vw] [&>div]:!h-[15vh] [&>div]:!w-[25vw]" // Bottom Right
                    ]
                        : [
                            "", // Center
                            "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]", // Top Left
                            "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]", // Left
                            "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]", // Right
                            "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]", // Bottom Left
                            "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]", // Bottom
                            "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]" // Bottom Right
                        ];

                    const positionClass = layoutStyles[index] || "";

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center ${positionClass}`}
                        >
                            <div className={`relative ${isMobile ? 'h-[20vh] w-[35vw]' : 'h-[25vh] w-[25vw]'}`}>
                                <img
                                    src={src || "/placeholder.svg"}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover rounded-xl shadow-soft"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
