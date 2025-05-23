import { ApiKeyEntity } from "../entities/api.entity";
import { BillingEntity } from "../entities/billing.entity";
import { OrganizationEntity } from "../entities/organization.entity";
import {
  SitemapLogEntity,
  SitemapPageEntity,
  SitemapResponse,
} from "../entities/sitemap.entity";
import { UsageEntity } from "../entities/usage.entity";
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
  ["POST /auth/google/url"]: {
    url: string;
  };
  ["POST /auth/google/callback"]: {
    user: UserEntity;
    access_token: string;
  };

  ["POST /api/get_api_key"]: ApiKeyEntity;
  ["POST /api/update_api_key"]: ApiKeyEntity;
  ["POST /api/fetch_sitemap"]: SitemapResponse;
  ["POST /api/fetch_sitemap_with_only_pages"]: SitemapPageEntity[];

  ["GET /organizations"]: OrganizationEntity[];
  ["POST /organizations"]: OrganizationEntity;

  ["GET /billing/get-billing-info"]: BillingEntity | null;
  ["POST /billing/cancel-subscription"]: BillingEntity;

  ["POST /usage/get_logs"]: {
    logs: SitemapLogEntity[];
    total_logs: number;
  };
  ["POST /usage/get_usage"]: UsageEntity;

  ["POST /auth/forgot-password"]: {};

  ["POST /auth/reset-password"]: {};
};
