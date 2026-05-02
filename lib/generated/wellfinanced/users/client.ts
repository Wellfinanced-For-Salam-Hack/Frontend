// Generated Fetch API Client
// This file was auto-generated. Add custom code in the marked sections.

import type {
  Iusers_current_user_auth_users_me_get200Response,
  Iusers_patch_current_user_auth_users_me_patchDTO,
  Iusers_patch_current_user_auth_users_me_patch200Response,
  Iusers_user_auth_users__id__get200Response,
  Iusers_patch_user_auth_users__id__patchDTO,
  Iusers_patch_user_auth_users__id__patch200Response,
} from './types';

import {
  users_current_user_auth_users_me_get as users_current_user_auth_users_me_get_endpoint,
  users_patch_current_user_auth_users_me_patch as users_patch_current_user_auth_users_me_patch_endpoint,
  users_user_auth_users__id__get as users_user_auth_users__id__get_endpoint,
  users_patch_user_auth_users__id__patch as users_patch_user_auth_users__id__patch_endpoint,
  users_delete_user_auth_users__id__delete as users_delete_user_auth_users__id__delete_endpoint,
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
 * Users:Current User
 * @method GET
 * @path /auth/users/me
 * @tags users
 */
export async function users_current_user_auth_users_me_get(): Promise<Iusers_current_user_auth_users_me_get200Response> {
  const _url = users_current_user_auth_users_me_get_endpoint;
  return fetchAPI<Iusers_current_user_auth_users_me_get200Response>(_url, {
    method: 'GET',
  });
}

/**
 * Users:Patch Current User
 * @method PATCH
 * @path /auth/users/me
 * @tags users
 */
export async function users_patch_current_user_auth_users_me_patch(params: {
  data: Iusers_patch_current_user_auth_users_me_patchDTO;
}
): Promise<Iusers_patch_current_user_auth_users_me_patch200Response> {
  const { data } = params;
  const _url = users_patch_current_user_auth_users_me_patch_endpoint;
  return fetchAPI<Iusers_patch_current_user_auth_users_me_patch200Response>(_url, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * Users:User
 * @method GET
 * @path /auth/users/{id}
 * @tags users
 */
export async function users_user_auth_users__id__get(params: {
  url: {
    id: string;
  };
}
): Promise<Iusers_user_auth_users__id__get200Response> {
  const { url } = params;
  const _url = users_user_auth_users__id__get_endpoint(url.id);
  return fetchAPI<Iusers_user_auth_users__id__get200Response>(_url, {
    method: 'GET',
  });
}

/**
 * Users:Patch User
 * @method PATCH
 * @path /auth/users/{id}
 * @tags users
 */
export async function users_patch_user_auth_users__id__patch(params: {
  url: {
    id: string;
  };
  data: Iusers_patch_user_auth_users__id__patchDTO;
}
): Promise<Iusers_patch_user_auth_users__id__patch200Response> {
  const { url, data } = params;
  const _url = users_patch_user_auth_users__id__patch_endpoint(url.id);
  return fetchAPI<Iusers_patch_user_auth_users__id__patch200Response>(_url, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * Users:Delete User
 * @method DELETE
 * @path /auth/users/{id}
 * @tags users
 */
export async function users_delete_user_auth_users__id__delete(params: {
  url: {
    id: string;
  };
}
): Promise<any> {
  const { url } = params;
  const _url = users_delete_user_auth_users__id__delete_endpoint(url.id);
  return fetchAPI<any>(_url, {
    method: 'DELETE',
  });
}

// Export all functions as a default object
const apiClient = {
  setApiConfig,
  users_current_user_auth_users_me_get,
  users_patch_current_user_auth_users_me_patch,
  users_user_auth_users__id__get,
  users_patch_user_auth_users__id__patch,
  users_delete_user_auth_users__id__delete,
};

export default apiClient;




// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================