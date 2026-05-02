import { z } from "zod";

export const Iauth_jwt_login_auth_login_postDTOSchema = z.object({
  grant_type: z.union([z.string().regex(/^password$/), z.null()]).optional(),
  username: z.string(),
  password: z.string(),
  scope: z.string().optional(),
  client_id: z.union([z.string(), z.null()]).optional(),
  client_secret: z.union([z.string(), z.null()]).optional()
});

export const Iregister_register_auth_register_postDTOSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  is_active: z.union([z.boolean(), z.null()]).optional(),
  is_superuser: z.union([z.boolean(), z.null()]).optional(),
  is_verified: z.union([z.boolean(), z.null()]).optional()
});

export const Ireset_forgot_password_auth_forgot_password_postDTOSchema = z.object({
  email: z.string().email()
});

export const Ireset_reset_password_auth_reset_password_postDTOSchema = z.object({
  token: z.string(),
  password: z.string()
});

export const Iverify_request_token_auth_request_verify_token_postDTOSchema = z.object({
  email: z.string().email()
});

export const Iverify_verify_auth_verify_postDTOSchema = z.object({
  token: z.string()
});













































// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================