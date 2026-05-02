/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [accounts]  
 * **OperationId**: create_route_accounts__post  
 * **DTO**: 
```typescript
    Shared.IAccountCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_accounts__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_accounts__post422Response
```  
```bash  
curl /accounts/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "institution": "string",
        "currency": ,
        "current_balance": 123,
        "status": active,
        "category": cash
     }'
```
 */
export const create_route_accounts__post = "/accounts/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [accounts]  
 * **OperationId**: list_route_accounts__get  
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
    	"categoryNotIn"?: (Shared.IAccountCategory[]|null);
    	"statusNotIn"?: (Shared.IAccountStatus[]|null);
    	"categoryIn"?: (Shared.IAccountCategory[]|null);
    	"statusIn"?: (Shared.IAccountStatus[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_accounts__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_accounts__get422Response
```  
```bash  
curl /accounts/ \
 -X GET
```
 */
export const list_route_accounts__get = "/accounts/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [accounts]  
 * **OperationId**: get_route_accounts__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_accounts__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_accounts__id__get422Response
```  
```bash  
curl /accounts/{id} \
 -X GET
```
 */
export const get_route_accounts__id__get = (id:string)=> `/accounts/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [accounts]  
 * **OperationId**: update_route_accounts__id__put  
 * **DTO**: 
```typescript
    Shared.IAccountCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_accounts__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_accounts__id__put422Response
```  
```bash  
curl /accounts/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "institution": "string",
        "currency": ,
        "current_balance": 123,
        "status": active,
        "category": cash
     }'
```
 */
export const update_route_accounts__id__put = (id:string)=> `/accounts/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [accounts]  
 * **OperationId**: delete_route_accounts__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_accounts__id__delete422Response
```  
```bash  
curl /accounts/{id} \
 -X DELETE
```
 */
export const delete_route_accounts__id__delete = (id:string)=> `/accounts/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================