"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}

const GlowingEffect = memo(
    ({
        className,
        disabled = false,
        borderWidth = 1,
    }: GlowingEffectProps) => {
        if (disabled) {
            return null;
        }

        return (
            <div
                className={cn(
                    "pointer-events-none absolute rounded-[inherit] opacity-0 transition-opacity duration-[1500ms] group-hover:opacity-100 hidden md:block overflow-hidden",
                    className
                )}
                style={{
                    // Extend slightly outside to cover the existing border
                    top: `-${borderWidth}px`,
                    left: `-${borderWidth}px`,
                    right: `-${borderWidth}px`,
                    bottom: `-${borderWidth}px`,
                    padding: borderWidth,
                    // Creates a "hollow" mask that only shows the padded area (the border)
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            >
                <div
                    className="absolute inset-[-150%] animate-[spin_10s_linear_infinite]"
                    style={{
                        // Soft coral (#ff6b5e desaturated ~50%) to muted warm grey
                        background: 'conic-gradient(from 0deg, transparent 0%, rgba(220,148,138,0.5) 20%, rgba(190,185,180,0.4) 40%, transparent 60%, rgba(220,148,138,0.5) 80%, transparent 100%)',
                    }}
                />
            </div>
        );
    }
);

GlowingEffect.displayName = "GlowingEffect";

// Export a mobile fallback component that uses basic CSS
export const MobileGlowingEffect = ({ className, disabled, borderWidth = 1 }: { className?: string, disabled?: boolean, borderWidth?: number }) => {
    if (disabled) return null;

    return (
        <div
            className={cn(
                "block md:hidden pointer-events-none absolute rounded-[inherit] transition-opacity duration-300 opacity-50 overflow-hidden",
                className
            )}
            style={{
                top: `-${borderWidth}px`,
                left: `-${borderWidth}px`,
                right: `-${borderWidth}px`,
                bottom: `-${borderWidth}px`,
                padding: borderWidth,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
            }}
        >
            <div
                className="absolute inset-[-100%]"
                style={{
                    background: 'linear-gradient(135deg, rgba(220, 148, 138, 0.4) 0%, transparent 100%)',
                }}
            />
        </div>
    );
};

export { GlowingEffect };
