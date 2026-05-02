import { z } from "zod";

export const Icreate_route_accounts__postDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  institution: z.union([z.string(), z.null()]),
  currency: z.enum(["EGP"]),
  current_balance: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  status: z.enum(["active", "archived", "inactive", "closed", "frozen", "hidden", "pending"]),
  category: z.enum(["cash", "checking", "savings", "wallet", "investment", "receivable", "escrow"])
});

export const Ilist_route_accounts__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  categoryNotIn: z.union([z.array(z.enum(["cash", "checking", "savings", "wallet", "investment", "receivable", "escrow"])), z.null()]).optional(),
  statusNotIn: z.union([z.array(z.enum(["active", "archived", "inactive", "closed", "frozen", "hidden", "pending"])), z.null()]).optional(),
  categoryIn: z.union([z.array(z.enum(["cash", "checking", "savings", "wallet", "investment", "receivable", "escrow"])), z.null()]).optional(),
  statusIn: z.union([z.array(z.enum(["active", "archived", "inactive", "closed", "frozen", "hidden", "pending"])), z.null()]).optional()
});

export const Iupdate_route_accounts__id__putDTOSchema = z.object({
  label: z.string(),
  description: z.union([z.string(), z.null()]),
  institution: z.union([z.string(), z.null()]),
  currency: z.enum(["EGP"]),
  current_balance: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  status: z.enum(["active", "archived", "inactive", "closed", "frozen", "hidden", "pending"]),
  category: z.enum(["cash", "checking", "savings", "wallet", "investment", "receivable", "escrow"])
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================