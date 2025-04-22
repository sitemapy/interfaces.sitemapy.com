import { SitemapResponse } from "./sitemap.entity";

export type ApiLogEntity = {
  id: string;
  api_key_id: string;
  organization_id: string;

  url: string;
  number_of_sitemap_fetched: number;
  total_pages_in_sitemaps: number;
  fetching_duration: number;
  does_sitemap_contain_errors: boolean;
  mode: "sitemap_tree" | "pages_only" | "sitemap_tree_with_pages";

  created_at: Date;
};

export type ApiKeyEntity = {
  key: string;
  organization_id: string;
  updated_at: Date;
  created_at: Date;
};

export type ApiLogResponseEntity = {
  api_log_id: string;
  response: SitemapResponse[];
};

export type ApiKeyWithUsageEntity = ApiKeyEntity & {
  current_usage: number;
  max_usage: number;
  reset_date: Date;
};
