import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute("content", description);

        // 3. Update Canonical Tag
        if (canonical) {
            const canonicalUrl = `https://puredesignstudio.co.uk${canonical}`;
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
                linkCanonical = document.createElement("link");
                linkCanonical.setAttribute("rel", "canonical");
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute("href", canonicalUrl);
        }
    }, [title, description, canonical]);

    return null; // This component does not render any visible HTML
}
