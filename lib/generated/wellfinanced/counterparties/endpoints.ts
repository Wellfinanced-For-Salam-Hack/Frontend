/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [counterparties]  
 * **OperationId**: create_route_counterparties__post  
 * **DTO**: 
```typescript
    Shared.ICounterpartyCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_counterparties__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_counterparties__post422Response
```  
```bash  
curl /counterparties/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "category": individual
     }'
```
 */
export const create_route_counterparties__post = "/counterparties/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [counterparties]  
 * **OperationId**: list_route_counterparties__get  
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
    	"categoryIn"?: (Shared.ICounterpartyCategory[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_counterparties__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_counterparties__get422Response
```  
```bash  
curl /counterparties/ \
 -X GET
```
 */
export const list_route_counterparties__get = "/counterparties/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [counterparties]  
 * **OperationId**: get_route_counterparties__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_counterparties__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_counterparties__id__get422Response
```  
```bash  
curl /counterparties/{id} \
 -X GET
```
 */
export const get_route_counterparties__id__get = (id:string)=> `/counterparties/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [counterparties]  
 * **OperationId**: update_route_counterparties__id__put  
 * **DTO**: 
```typescript
    Shared.ICounterpartyCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_counterparties__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_counterparties__id__put422Response
```  
```bash  
curl /counterparties/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "category": individual
     }'
```
 */
export const update_route_counterparties__id__put = (id:string)=> `/counterparties/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [counterparties]  
 * **OperationId**: delete_route_counterparties__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_counterparties__id__delete422Response
```  
```bash  
curl /counterparties/{id} \
 -X DELETE
```
 */
export const delete_route_counterparties__id__delete = (id:string)=> `/counterparties/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================