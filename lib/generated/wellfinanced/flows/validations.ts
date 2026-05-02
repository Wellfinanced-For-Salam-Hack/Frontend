import { z } from "zod";

export const Icreate_route_flows__postDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  category: z.enum(["salary_wages", "prize", "freelance_contract_payment", "business_revenue", "investment_dividend", "property_rent", "government_benefits_aid", "scholarship_stipend", "ngo_charity_donation", "friends_family_gift", "inheritance", "compensation_insurance", "debt", "transfer", "sell_assets_cash_out_investments", "tax_payment_zakat", "saving_goal"]),
  status: z.enum(["active", "inactive", "closed"]),
  counterparty_id: z.string().uuid()
});

export const Ilist_route_flows__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  statusIn: z.union([z.array(z.enum(["active", "inactive", "closed"])), z.null()]).optional(),
  categoryIn: z.union([z.array(z.enum(["salary_wages", "prize", "freelance_contract_payment", "business_revenue", "investment_dividend", "property_rent", "government_benefits_aid", "scholarship_stipend", "ngo_charity_donation", "friends_family_gift", "inheritance", "compensation_insurance", "debt", "transfer", "sell_assets_cash_out_investments", "tax_payment_zakat", "saving_goal"])), z.null()]).optional()
});

export const Iupdate_route_flows__id__putDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  category: z.enum(["salary_wages", "prize", "freelance_contract_payment", "business_revenue", "investment_dividend", "property_rent", "government_benefits_aid", "scholarship_stipend", "ngo_charity_donation", "friends_family_gift", "inheritance", "compensation_insurance", "debt", "transfer", "sell_assets_cash_out_investments", "tax_payment_zakat", "saving_goal"]),
  status: z.enum(["active", "inactive", "closed"]),
  counterparty_id: z.string().uuid()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================