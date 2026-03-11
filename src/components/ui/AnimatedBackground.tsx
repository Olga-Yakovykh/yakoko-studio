import React from "react";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#f5f5f5] pointer-events-none">
            {/* Warm Coral Accent */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full mix-blend-multiply opacity-[0.08] blur-[150px] animate-float"
                style={{
                    background: "radial-gradient(circle, #ff6b5e 0%, transparent 70%)"
                }}
            />

            {/* Cool Grey-Blue Accent */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[1200px] h-[1200px] rounded-full mix-blend-multiply opacity-[0.12] blur-[150px] animate-float-reverse"
                style={{
                    background: "radial-gradient(circle, #8aa0b8 0%, transparent 70%)"
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
