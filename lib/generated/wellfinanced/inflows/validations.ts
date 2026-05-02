import { z } from "zod";

export const Icreate_route_inflows__postDTOSchema = z.object({
  currency: z.enum(["EGP"]),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  notes: z.union([z.string(), z.null()]).optional(),
  financial_flow_id: z.union([z.string().uuid(), z.null()]).optional(),
  category: z.enum(["income", "support", "liability"]),
  counterparty_id: z.string().uuid(),
  to_account_id: z.string().uuid()
});

export const Ilist_route_inflows__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  toAccountIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  categoryIn: z.union([z.array(z.enum(["income", "support", "liability"])), z.null()]).optional(),
  counterpartyIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  financialFlowIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional()
});

export const Iupdate_route_inflows__id__putDTOSchema = z.object({
  currency: z.enum(["EGP"]),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  notes: z.union([z.string(), z.null()]).optional(),
  financial_flow_id: z.union([z.string().uuid(), z.null()]).optional(),
  category: z.enum(["income", "support", "liability"]),
  counterparty_id: z.string().uuid(),
  to_account_id: z.string().uuid()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================