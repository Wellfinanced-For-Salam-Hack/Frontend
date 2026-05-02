import { z } from "zod";

export const Icreate_route_schedules__postDTOSchema = z.object({
  start_year: z.union([z.number().int(), z.null()]).optional(),
  end_year: z.union([z.number().int(), z.null()]).optional(),
  start_month: z.union([z.number().int(), z.null()]).optional(),
  end_month: z.union([z.number().int(), z.null()]).optional(),
  start_day_of_month: z.union([z.number().int(), z.null()]).optional(),
  end_day_of_month: z.union([z.number().int(), z.null()]).optional(),
  start_day_of_week: z.union([z.number().int(), z.null()]).optional(),
  end_day_of_week: z.union([z.number().int(), z.null()]).optional(),
  start_hour: z.union([z.number().int(), z.null()]).optional(),
  end_hour: z.union([z.number().int(), z.null()]).optional(),
  start_minute: z.union([z.number().int(), z.null()]).optional(),
  end_minute: z.union([z.number().int(), z.null()]).optional()
});

export const Ilist_route_schedules__getQuerySchema = z.object({
  ids: z.union([z.array(z.string().uuid()), z.null()]).optional()
});

export const Iupdate_route_schedules__id__putDTOSchema = z.object({
  start_year: z.union([z.number().int(), z.null()]).optional(),
  end_year: z.union([z.number().int(), z.null()]).optional(),
  start_month: z.union([z.number().int(), z.null()]).optional(),
  end_month: z.union([z.number().int(), z.null()]).optional(),
  start_day_of_month: z.union([z.number().int(), z.null()]).optional(),
  end_day_of_month: z.union([z.number().int(), z.null()]).optional(),
  start_day_of_week: z.union([z.number().int(), z.null()]).optional(),
  end_day_of_week: z.union([z.number().int(), z.null()]).optional(),
  start_hour: z.union([z.number().int(), z.null()]).optional(),
  end_hour: z.union([z.number().int(), z.null()]).optional(),
  start_minute: z.union([z.number().int(), z.null()]).optional(),
  end_minute: z.union([z.number().int(), z.null()]).optional()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================