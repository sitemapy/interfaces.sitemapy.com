export type SitemapEntity = {
  id: string;
  url: string;
  organization_id: string;
  created_at: Date;
  updated_at: Date;
  options: SitemapOptionsEntity;
};

export type SitemapOptionsEntity = {
  auto_crawl_enabled: boolean;
  crawl_frequency: "every-day" | "every-week" | "every-month";
  created_at: Date;
  updated_at: Date;
};

export type SitemapLogsEntity = {
  id: string;
  fk_sitemap_id: string;
  crawl_success: boolean;
  error_message: string | null;
  error_trace: string | null;
  created_at: Date;
  updated_at: Date;
};

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
