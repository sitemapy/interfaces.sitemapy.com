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
  ["GET /auth/google/callback"]: {
    user: UserEntity;
    access_token: string;
  };
};
