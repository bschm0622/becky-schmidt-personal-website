export interface SiteConfiguration {
    title: string;
    description: string;
    href: string;
    author: string;
    locale: string;
}

export const SITE: SiteConfiguration = {
    title: "Astro Boilerplate",
    description:
        "Built with Astro, Tailwind CSS, and Markdown.",
    href: "https://astro-boilerplate.beckyschmidt.me",
    author: "Becky Schmidt",
    locale: "en-US",
};
