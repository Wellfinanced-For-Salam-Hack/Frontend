import { z } from "zod";

export const Icreate_route_installments__postDTOSchema = z.object({
  direction: z.enum(["inflow", "outflow"]),
  financial_flow_id: z.string().uuid(),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  currency: z.enum(["EGP"]),
  scheduled_for: z.string().datetime(),
  rescheduled_from_installment_id: z.union([z.string().uuid(), z.null()]).optional(),
  status: z.enum(["pending", "completed", "missed"])
});

export const Ilist_route_installments__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  createdBefore: z.union([z.string(), z.null()]).optional(),
  createdAfter: z.union([z.string(), z.null()]).optional(),
  currentPage: z.number().int().min(1).optional(),
  pageSize: z.number().int().min(1).optional(),
  searchString: z.union([z.string(), z.null()]).optional(),
  searchIgnoreCase: z.union([z.boolean(), z.null()]).optional(),
  orderBy: z.string().optional(),
  sortOrder: z.union([z.enum(["asc", "desc"]), z.null()]).optional(),
  statusIn: z.union([z.array(z.enum(["pending", "completed", "missed"])), z.null()]).optional(),
  financialFlowIdIn: z.union([z.array(z.string().uuid()), z.null()]).optional(),
  directionIn: z.union([z.array(z.enum(["inflow", "outflow"])), z.null()]).optional()
});

export const Iupdate_route_installments__id__putDTOSchema = z.object({
  direction: z.enum(["inflow", "outflow"]),
  financial_flow_id: z.string().uuid(),
  amount: z.union([z.number(), z.string().regex(/^(?!^[-+.]*$)[+-]?0*\d*\.?\d*$/)]),
  currency: z.enum(["EGP"]),
  scheduled_for: z.string().datetime(),
  rescheduled_from_installment_id: z.union([z.string().uuid(), z.null()]).optional(),
  status: z.enum(["pending", "completed", "missed"])
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================