export enum ErrorEntity {
  SITEMAP_NOT_FOUND = "sitemap/not-found",
  SITEMAP_INVALID = "sitemap/invalid",
  SITEMAP_ERROR = "sitemap/error",
  RATE_LIMIT_EXCEEDED = "rate-limit/exceeded",
  API_KEY_NOT_FOUND = "api-key/not-found",
  CREDENTIALS_NOT_FOUND = "credentials/not-found",
  UNKNOWN_ERROR = "global/unknown-error",
  USER_NOT_FOUND = "user/not-found",
  USER_NOT_AUTHENTICATED = "user/not-authenticated",
  USER_IS_NOT_ADMIN_OF_ORGANIZATION = "user/is-not-admin-of-organization",
  USER_IS_NOT_MEMBER_OF_ORGANIZATION = "user/is-not-member-of-organization",
}
