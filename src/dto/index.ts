import {
  ApiKeyEntity,
  ApiKeyWithUsageEntity,
  ApiLogEntity,
} from "../entities/api.entity";
import { OrganizationEntity } from "../entities/organization.entity";
import { SitemapPageEntity, SitemapResponse } from "../entities/sitemap.entity";
import { UserEntity } from "../entities/user.entity";
export type ApiResponses = {
  ["POST /sitemap/crawl/with-tree"]: SitemapResponse;
  ["POST /sitemap/crawl/only-pages"]: SitemapPageEntity[];
  ["POST /sitemap/crawl/for-free-landing-page"]: {
    rate_limit_remaining: number;
    sitemap: SitemapResponse;
  };

  ["POST /auth/login"]: {
    user: UserEntity;
    access_token: string;
  };
  ["POST /auth/signup"]: {
    user: UserEntity;
    access_token: string;
  };
  ["GET /auth/me"]: {
    user: UserEntity;
  };
  ["GET /auth/google/url"]: {
    url: string;
  };
  ["POST /auth/google/callback"]: {
    user: UserEntity;
    access_token: string;
  };

  ["POST /api/get_api_key"]: ApiKeyEntity;
  ["POST /api/update_api_key"]: ApiKeyEntity;
  ["POST /api/get_api_key_usage"]: ApiKeyWithUsageEntity;
  ["POST /api/fetch_sitemap"]: SitemapResponse;
  ["POST /api/fetch_sitemap_with_only_pages"]: SitemapPageEntity[];
  ["POST /api/get_logs"]: ApiLogEntity[];

  ["GET /organizations"]: OrganizationEntity[];
  ["POST /organizations"]: OrganizationEntity;
};
