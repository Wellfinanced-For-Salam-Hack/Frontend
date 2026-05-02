import { IConfig } from "openapi-sync";

const config: IConfig = {
  "refetchInterval": 1000000,
  "folder": "./lib/generated",
  "api": {
    "wellfinanced": "https://kamarshalaby0--wellfinanced-fastapi-app.modal.run/api/v1/openapi.json"
  },
  "folderSplit": {
    "byTags": true
  },
  "types": {
    "name": {
      "prefix": "I",
      "useOperationId": true
    }
  },
  "endpoints": {
    "name": {
      "useOperationId": true
    },
    "doc": {
      "showCurl": true
    }
  },
  "clientGeneration": {
    "enabled": true,
    "type": "fetch",
    "outputDir": "lib/generated/wellfinanced/client"
  },
  "validations": {
    "library": "zod"
  },
  "customCode": {
    "enabled": true,
    "position": "bottom"
  }
};

export default config;
