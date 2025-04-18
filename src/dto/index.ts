import { SitemapResponse } from "../entities/sitemap.entity";

export type ApiResponses = {
  ["POST /sitemap/run"]: SitemapResponse;
};
