export type BillingEntity = {
  id: string;
  user_id: string;
  plan: "unlimited" | "enterprise" | "teams" | "individual";
  cancellation_effective_date: Date | null;
  created_at: Date;
  updated_at: Date;
};
