import { z } from "zod";

export const Icreate_route_assets__postDTOSchema = z.object({
  estimate_value: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  category: z.enum(["stocks", "property"]),
  status: z.enum(["active", "idle_reserved", "temporarily_unavailable", "impaired", "disposed_retired", "written_off"])
});

export const Ilist_route_assets__getQuerySchema = z.object({
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

export const Iupdate_route_assets__id__putDTOSchema = z.object({
  estimate_value: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  category: z.enum(["stocks", "property"]),
  status: z.enum(["active", "idle_reserved", "temporarily_unavailable", "impaired", "disposed_retired", "written_off"])
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================