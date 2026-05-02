import { z } from "zod";

export const Icreate_route_counterparties__postDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  category: z.enum(["individual", "business", "ngo", "government"])
});

export const Ilist_route_counterparties__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  categoryIn: z.union([z.array(z.enum(["individual", "business", "ngo", "government"])), z.null()]).optional()
});

export const Iupdate_route_counterparties__id__putDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  category: z.enum(["individual", "business", "ngo", "government"])
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================