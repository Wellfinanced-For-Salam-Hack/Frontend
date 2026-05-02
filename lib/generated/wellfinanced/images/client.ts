// Generated Fetch API Client
// This file was auto-generated. Add custom code in the marked sections.

import type {
  Iupload_image_images_uploads_postDTO,
  Iupload_image_images_uploads_post202Response,
} from './types';

import {
  upload_image_images_uploads_post as upload_image_images_uploads_post_endpoint,
  download_image_images_uploads__id__get as download_image_images_uploads__id__get_endpoint,
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
 * Upload Image
 * @method POST
 * @path /images/uploads
 * @tags images
 */
export async function upload_image_images_uploads_post(params: {
  data: Iupload_image_images_uploads_postDTO;
}
): Promise<Iupload_image_images_uploads_post202Response> {
  const { data } = params;
  const _url = upload_image_images_uploads_post_endpoint;
  return fetchAPI<Iupload_image_images_uploads_post202Response>(_url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Download Image
 * @method GET
 * @path /images/uploads/{id}
 * @tags images
 */
export async function download_image_images_uploads__id__get(params: {
  url: {
    id: string;
  };
}
): Promise<any> {
  const { url } = params;
  const _url = download_image_images_uploads__id__get_endpoint(url.id);
  return fetchAPI<any>(_url, {
    method: 'GET',
  });
}

// Export all functions as a default object
const apiClient = {
  setApiConfig,
  upload_image_images_uploads_post,
  download_image_images_uploads__id__get,
};

export default apiClient;




// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================