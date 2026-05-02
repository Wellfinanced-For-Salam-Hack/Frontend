import { z } from "zod";

export const Iusers_patch_current_user_auth_users_me_patchDTOSchema = z.object({
  password: z.union([z.string(), z.null()]).optional(),
  email: z.union([z.string().email(), z.null()]).optional(),
  is_active: z.union([z.boolean(), z.null()]).optional(),
  is_superuser: z.union([z.boolean(), z.null()]).optional(),
  is_verified: z.union([z.boolean(), z.null()]).optional()
});

export const Iusers_patch_user_auth_users__id__patchDTOSchema = z.object({
  password: z.union([z.string(), z.null()]).optional(),
  email: z.union([z.string().email(), z.null()]).optional(),
  is_active: z.union([z.boolean(), z.null()]).optional(),
  is_superuser: z.union([z.boolean(), z.null()]).optional(),
  is_verified: z.union([z.boolean(), z.null()]).optional()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================