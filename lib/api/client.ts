import { configureAllClients, clients } from '@/lib/generated/wellfinanced/clients';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  'https://kamarshalaby0--wellfinanced-fastapi-app.modal.run';

configureAllClients({ baseURL: API_BASE_URL });

export { clients };
