// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Emerson Huinca Coliqueo";
export const SITE_TITLE = "Emerson Huinca Coliqueo";
export const SITE_DESCRIPTION = "An Astro Theme for Visual Storytelling";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - All Tags";
export const Tags_DESCRIPTION =
  "AstroVerse - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/Naturaleza/1/", title: "Naturaleza" },
  { href: "/category/Galeria/1/", title: "Galeria" },
  { href: "/category/Boulder/1/", title: "Boulder" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/boulder/", title: "Boulder" },
  { href: "/posts/puerto-varas/", title: "Puerto Varas" },
  { href: "/posts/punta-zanzi/", title: "Punta zanzi" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://gmail.com/",
    icon: "tabler:brand-gmail",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/emersonh.coliqueo/",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
