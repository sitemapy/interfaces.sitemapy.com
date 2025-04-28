export type SitemapResponse = {
  type: "sitemap-index" | "sitemap" | "folder" | "page";
  url: string;
  status_code?: number;
  updated_at?: Date;
  priority?: number;
  sitemap_parent_url: string | null;
  number_total_of_pages: number;
  number_total_of_sitemaps: number;
  fetching_duration: number;
  does_sitemap_contain_errors: boolean;
  children: Array<SitemapResponse>;
};

export type SitemapPageEntity = {
  url: string;
  updated_at?: Date;
  priority?: number;
  sitemap_parent_url: string | null;
};

export type SitemapLogEntity = {
  id: string;
  organization_id: string;
  url: string;
  number_of_sitemap_fetched: number;
  total_pages_in_sitemaps: number;
  fetching_duration: number;
  does_sitemap_contain_errors: boolean;
  mode: "sitemap_tree" | "pages_only" | "sitemap_tree_with_pages";
  source: "api" | "web" | "cron";
  created_at: Date;
};
