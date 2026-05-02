// Generated Fetch API Client
// This file was auto-generated. Add custom code in the marked sections.

import type {
  Iauth_jwt_login_auth_login_postDTO,
  Iauth_jwt_login_auth_login_post200Response,
  Iauth_jwt_logout_auth_logout_post200Response,
  Iregister_register_auth_register_postDTO,
  Iregister_register_auth_register_post201Response,
  Ireset_forgot_password_auth_forgot_password_postDTO,
  Ireset_forgot_password_auth_forgot_password_post202Response,
  Ireset_reset_password_auth_reset_password_postDTO,
  Ireset_reset_password_auth_reset_password_post200Response,
  Iverify_request_token_auth_request_verify_token_postDTO,
  Iverify_request_token_auth_request_verify_token_post202Response,
  Iverify_verify_auth_verify_postDTO,
  Iverify_verify_auth_verify_post200Response,
} from './types';

import {
  auth_jwt_login_auth_login_post as auth_jwt_login_auth_login_post_endpoint,
  auth_jwt_logout_auth_logout_post as auth_jwt_logout_auth_logout_post_endpoint,
  register_register_auth_register_post as register_register_auth_register_post_endpoint,
  reset_forgot_password_auth_forgot_password_post as reset_forgot_password_auth_forgot_password_post_endpoint,
  reset_reset_password_auth_reset_password_post as reset_reset_password_auth_reset_password_post_endpoint,
  verify_request_token_auth_request_verify_token_post as verify_request_token_auth_request_verify_token_post_endpoint,
  verify_verify_auth_verify_post as verify_verify_auth_verify_post_endpoint,
} from './endpoints';

export interface ApiConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

let globalConfig: ApiConfig = {
  baseURL: "",
};

export const setApiConfig = (config: Partial<ApiConfig>) => {
  globalConfig = { ...globalConfig, ...config };
};

async function fetchAPI<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...globalConfig.headers,
    ...(options.headers as Record<string, string>),
  };

  const response = await fetch(`${globalConfig.baseURL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/**
 * Auth:Jwt.Login
 * @method POST
 * @path /auth/login
 * @tags auth
 */
export async function auth_jwt_login_auth_login_post(params: {
  data: Iauth_jwt_login_auth_login_postDTO;
}
): Promise<Iauth_jwt_login_auth_login_post200Response> {
  const { data } = params;
  const _url = auth_jwt_login_auth_login_post_endpoint;
  return fetchAPI<Iauth_jwt_login_auth_login_post200Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Auth:Jwt.Logout
 * @method POST
 * @path /auth/logout
 * @tags auth
 */
export async function auth_jwt_logout_auth_logout_post(): Promise<Iauth_jwt_logout_auth_logout_post200Response> {
  const _url = auth_jwt_logout_auth_logout_post_endpoint;
  return fetchAPI<Iauth_jwt_logout_auth_logout_post200Response>(_url, {
    method: 'POST',
  });
}

/**
 * Register:Register
 * @method POST
 * @path /auth/register
 * @tags auth
 */
export async function register_register_auth_register_post(params: {
  data: Iregister_register_auth_register_postDTO;
}
): Promise<Iregister_register_auth_register_post201Response> {
  const { data } = params;
  const _url = register_register_auth_register_post_endpoint;
  return fetchAPI<Iregister_register_auth_register_post201Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Reset:Forgot Password
 * @method POST
 * @path /auth/forgot-password
 * @tags auth
 */
export async function reset_forgot_password_auth_forgot_password_post(params: {
  data: Ireset_forgot_password_auth_forgot_password_postDTO;
}
): Promise<Ireset_forgot_password_auth_forgot_password_post202Response> {
  const { data } = params;
  const _url = reset_forgot_password_auth_forgot_password_post_endpoint;
  return fetchAPI<Ireset_forgot_password_auth_forgot_password_post202Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Reset:Reset Password
 * @method POST
 * @path /auth/reset-password
 * @tags auth
 */
export async function reset_reset_password_auth_reset_password_post(params: {
  data: Ireset_reset_password_auth_reset_password_postDTO;
}
): Promise<Ireset_reset_password_auth_reset_password_post200Response> {
  const { data } = params;
  const _url = reset_reset_password_auth_reset_password_post_endpoint;
  return fetchAPI<Ireset_reset_password_auth_reset_password_post200Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Verify:Request-Token
 * @method POST
 * @path /auth/request-verify-token
 * @tags auth
 */
export async function verify_request_token_auth_request_verify_token_post(params: {
  data: Iverify_request_token_auth_request_verify_token_postDTO;
}
): Promise<Iverify_request_token_auth_request_verify_token_post202Response> {
  const { data } = params;
  const _url = verify_request_token_auth_request_verify_token_post_endpoint;
  return fetchAPI<Iverify_request_token_auth_request_verify_token_post202Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Verify:Verify
 * @method POST
 * @path /auth/verify
 * @tags auth
 */
export async function verify_verify_auth_verify_post(params: {
  data: Iverify_verify_auth_verify_postDTO;
}
): Promise<Iverify_verify_auth_verify_post200Response> {
  const { data } = params;
  const _url = verify_verify_auth_verify_post_endpoint;
  return fetchAPI<Iverify_verify_auth_verify_post200Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Export all functions as a default object
const apiClient = {
  setApiConfig,
  auth_jwt_login_auth_login_post,
  auth_jwt_logout_auth_logout_post,
  register_register_auth_register_post,
  reset_forgot_password_auth_forgot_password_post,
  reset_reset_password_auth_reset_password_post,
  verify_request_token_auth_request_verify_token_post,
  verify_verify_auth_verify_post,
};

export default apiClient;




// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================