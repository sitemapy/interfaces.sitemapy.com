import { SitemapPageEntity, SitemapResponse } from "../entities/sitemap.entity";

export type ApiResponses = {
  ["POST /sitemap/crawl/with-tree"]: SitemapResponse;
  ["POST /sitemap/crawl/only-pages"]: SitemapPageEntity[];
};
