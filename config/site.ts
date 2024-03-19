export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Manga Otaku',
  description: 'An opinionated new way of reading mangas',
  url: 'https://manga-otaku.com',
  links: {
    github: 'https://github.com/Zweer/manga-otaku',
  },
};
