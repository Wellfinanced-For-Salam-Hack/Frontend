import { z } from "zod";

export const Icreate_route_outflows__postDTOSchema = z.object({
  currency: z.enum(["EGP"]),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  notes: z.union([z.string(), z.null()]).optional(),
  financial_flow_id: z.union([z.string().uuid(), z.null()]).optional(),
  category: z.enum(["consumable", "purchase", "payment"]),
  from_account_id: z.string().uuid(),
  counterparty_id: z.string().uuid(),
  asset_id: z.union([z.string().uuid(), z.null()]).optional()
});

export const Ilist_route_outflows__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  fromAccountIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  counterpartyIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  financialFlowIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  categoryIn: z.union([z.array(z.enum(["consumable", "purchase", "payment"])), z.null()]).optional()
});

export const Iupdate_route_outflows__id__putDTOSchema = z.object({
  currency: z.enum(["EGP"]),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  notes: z.union([z.string(), z.null()]).optional(),
  financial_flow_id: z.union([z.string().uuid(), z.null()]).optional(),
  category: z.enum(["consumable", "purchase", "payment"]),
  from_account_id: z.string().uuid(),
  counterparty_id: z.string().uuid(),
  asset_id: z.union([z.string().uuid(), z.null()]).optional()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================