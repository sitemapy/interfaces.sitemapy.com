export type ApiKeyEntity = {
  key: string;
  organization_id: string;
  updated_at: Date;
  created_at: Date;
};

export type ApiKeyWithUsageEntity = ApiKeyEntity & {
  current_usage: number;
  max_usage: number;
  reset_date: Date;
};
