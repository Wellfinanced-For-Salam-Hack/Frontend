/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [assets]  
 * **OperationId**: create_route_assets__post  
 * **DTO**: 
```typescript
    Shared.IAssetCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_assets__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_assets__post422Response
```  
```bash  
curl /assets/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "estimate_value": 123,
        "category": stocks,
        "status": active
     }'
```
 */
export const create_route_assets__post = "/assets/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [assets]  
 * **OperationId**: list_route_assets__get  
 * **Query**: 
```typescript
    {
    	"ids"?: (string[]|null);
    	"createdBefore"?: (string|null);
    	"createdAfter"?: (string|null);
    	"currentPage"?: number;
    	"pageSize"?: number;
    	"searchString"?: (string|null);
    	"searchIgnoreCase"?: (boolean|null);
    	"orderBy"?: string;
    	"sortOrder"?: (("asc"|"desc")|null);
    	"fromAccountIdIn"?: (string[]|null);
    	"counterpartyIdIn"?: (string[]|null);
    	"financialFlowIdIn"?: (string[]|null);
    	"categoryIn"?: (Shared.IOutflowCategory[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_assets__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_assets__get422Response
```  
```bash  
curl /assets/ \
 -X GET
```
 */
export const list_route_assets__get = "/assets/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [assets]  
 * **OperationId**: get_route_assets__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_assets__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_assets__id__get422Response
```  
```bash  
curl /assets/{id} \
 -X GET
```
 */
export const get_route_assets__id__get = (id:string)=> `/assets/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [assets]  
 * **OperationId**: update_route_assets__id__put  
 * **DTO**: 
```typescript
    Shared.IAssetCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_assets__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_assets__id__put422Response
```  
```bash  
curl /assets/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "estimate_value": 123,
        "category": stocks,
        "status": active
     }'
```
 */
export const update_route_assets__id__put = (id:string)=> `/assets/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [assets]  
 * **OperationId**: delete_route_assets__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_assets__id__delete422Response
```  
```bash  
curl /assets/{id} \
 -X DELETE
```
 */
export const delete_route_assets__id__delete = (id:string)=> `/assets/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================