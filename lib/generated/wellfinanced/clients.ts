// Generated API Clients
// This file was auto-generated.
// Centralized client instances and configuration

export { default as authClient } from './auth/client';
export { default as usersClient } from './users/client';
export { default as accountsClient } from './accounts/client';
export { default as counterpartiesClient } from './counterparties/client';
export { default as flowsClient } from './flows/client';
export { default as schedulesClient } from './schedules/client';
export { default as installmentsClient } from './installments/client';
export { default as inflowsClient } from './inflows/client';
export { default as outflowsClient } from './outflows/client';
export { default as transfersClient } from './transfers/client';
export { default as assetsClient } from './assets/client';
export { default as imagesClient } from './images/client';

// Import clients for aggregation
import auth_client from './auth/client';
import users_client from './users/client';
import accounts_client from './accounts/client';
import counterparties_client from './counterparties/client';
import flows_client from './flows/client';
import schedules_client from './schedules/client';
import installments_client from './installments/client';
import inflows_client from './inflows/client';
import outflows_client from './outflows/client';
import transfers_client from './transfers/client';
import assets_client from './assets/client';
import images_client from './images/client';

// Aggregate all client instances
export const clients = {
  auth: auth_client,
  users: users_client,
  accounts: accounts_client,
  counterparties: counterparties_client,
  flows: flows_client,
  schedules: schedules_client,
  installments: installments_client,
  inflows: inflows_client,
  outflows: outflows_client,
  transfers: transfers_client,
  assets: assets_client,
  images: images_client,
};


/**
 * Configure all API clients at once
 * @param config - Configuration to apply to all clients
 */
export const configureAllClients = (config: {
  baseURL?: string;
  headers?: Record<string, string>;
  auth?: { token?: string };
}) => {
  auth_client.setApiConfig(config);
  users_client.setApiConfig(config);
  accounts_client.setApiConfig(config);
  counterparties_client.setApiConfig(config);
  flows_client.setApiConfig(config);
  schedules_client.setApiConfig(config);
  installments_client.setApiConfig(config);
  inflows_client.setApiConfig(config);
  outflows_client.setApiConfig(config);
  transfers_client.setApiConfig(config);
  assets_client.setApiConfig(config);
  images_client.setApiConfig(config);
};

// Example usage:
// import { configureAllClients, clients } from './clients';
//
// // Configure all clients at once
// configureAllClients({
//   baseURL: 'https://api.example.com',
//   timeout: 10000,
// });
//
// // Use specific client
// const data = await clients.auth.someMethod(...);




// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================