// Generated Fetch API Client
// This file was auto-generated. Add custom code in the marked sections.

import type {
  Icreate_route_transfers__postDTO,
  Icreate_route_transfers__post200Response,
  Ilist_route_transfers__getQuery,
  Ilist_route_transfers__get200Response,
  Iget_route_transfers__id__get200Response,
  Iupdate_route_transfers__id__putDTO,
  Iupdate_route_transfers__id__put200Response,
} from './types';

import {
  create_route_transfers__post as create_route_transfers__post_endpoint,
  list_route_transfers__get as list_route_transfers__get_endpoint,
  get_route_transfers__id__get as get_route_transfers__id__get_endpoint,
  update_route_transfers__id__put as update_route_transfers__id__put_endpoint,
  delete_route_transfers__id__delete as delete_route_transfers__id__delete_endpoint,
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
 * Create Route
 * @method POST
 * @path /transfers/
 * @tags transfers
 */
export async function create_route_transfers__post(params: {
  data: Icreate_route_transfers__postDTO;
}
): Promise<Icreate_route_transfers__post200Response> {
  const { data } = params;
  const _url = create_route_transfers__post_endpoint;
  return fetchAPI<Icreate_route_transfers__post200Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * List Route
 * @method GET
 * @path /transfers/
 * @tags transfers
 */
export async function list_route_transfers__get(params: {
  query: Ilist_route_transfers__getQuery;
}
): Promise<Ilist_route_transfers__get200Response> {
  const { query } = params;
  const queryParams = new URLSearchParams();
  if (query.ids !== undefined) {
    queryParams.append('ids', String(query.ids));
  }
  if (query.createdBefore !== undefined) {
    queryParams.append('createdBefore', String(query.createdBefore));
  }
  if (query.createdAfter !== undefined) {
    queryParams.append('createdAfter', String(query.createdAfter));
  }
  if (query.currentPage !== undefined) {
    queryParams.append('currentPage', String(query.currentPage));
  }
  if (query.pageSize !== undefined) {
    queryParams.append('pageSize', String(query.pageSize));
  }
  if (query.searchString !== undefined) {
    queryParams.append('searchString', String(query.searchString));
  }
  if (query.searchIgnoreCase !== undefined) {
    queryParams.append('searchIgnoreCase', String(query.searchIgnoreCase));
  }
  if (query.orderBy !== undefined) {
    queryParams.append('orderBy', String(query.orderBy));
  }
  if (query.sortOrder !== undefined) {
    queryParams.append('sortOrder', String(query.sortOrder));
  }
  if (query.fromAccountIdIn !== undefined) {
    queryParams.append('fromAccountIdIn', String(query.fromAccountIdIn));
  }
  if (query.categoryIn !== undefined) {
    queryParams.append('categoryIn', String(query.categoryIn));
  }
  if (query.financialFlowIdIn !== undefined) {
    queryParams.append('financialFlowIdIn', String(query.financialFlowIdIn));
  }
  if (query.counterpartyIdIn !== undefined) {
    queryParams.append('counterpartyIdIn', String(query.counterpartyIdIn));
  }
  const _url = `${list_route_transfers__get_endpoint}?${queryParams.toString()}`;
  return fetchAPI<Ilist_route_transfers__get200Response>(_url, {
    method: 'GET',
  });
}

/**
 * Get Route
 * @method GET
 * @path /transfers/{id}
 * @tags transfers
 */
export async function get_route_transfers__id__get(params: {
  url: {
    id: string;
  };
}
): Promise<Iget_route_transfers__id__get200Response> {
  const { url } = params;
  const _url = get_route_transfers__id__get_endpoint(url.id);
  return fetchAPI<Iget_route_transfers__id__get200Response>(_url, {
    method: 'GET',
  });
}

/**
 * Update Route
 * @method PUT
 * @path /transfers/{id}
 * @tags transfers
 */
export async function update_route_transfers__id__put(params: {
  url: {
    id: string;
  };
  data: Iupdate_route_transfers__id__putDTO;
}
): Promise<Iupdate_route_transfers__id__put200Response> {
  const { url, data } = params;
  const _url = update_route_transfers__id__put_endpoint(url.id);
  return fetchAPI<Iupdate_route_transfers__id__put200Response>(_url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Delete Route
 * @method DELETE
 * @path /transfers/{id}
 * @tags transfers
 */
export async function delete_route_transfers__id__delete(params: {
  url: {
    id: string;
  };
}
): Promise<any> {
  const { url } = params;
  const _url = delete_route_transfers__id__delete_endpoint(url.id);
  return fetchAPI<any>(_url, {
    method: 'DELETE',
  });
}

// Export all functions as a default object
const apiClient = {
  setApiConfig,
  create_route_transfers__post,
  list_route_transfers__get,
  get_route_transfers__id__get,
  update_route_transfers__id__put,
  delete_route_transfers__id__delete,
};

export default apiClient;


// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================