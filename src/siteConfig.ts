export interface SiteConfiguration {
    title: string;
    description: string;
    href: string;
    author: string;
    locale: string;
}

export const SITE: SiteConfiguration = {
    title: "Becky's Personal Website",
    description:
        "Product Manager, Developer, and Writer",
    href: "https://beckyschmidt.me",
    author: "Becky Schmidt",
    locale: "en-US",
};
