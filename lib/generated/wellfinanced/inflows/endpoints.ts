/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [inflows]  
 * **OperationId**: create_route_inflows__post  
 * **DTO**: 
```typescript
    Shared.IInflowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_inflows__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_inflows__post422Response
```  
```bash  
curl /inflows/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "category": income,
        "counterparty_id": "string",
        "to_account_id": "string"
     }'
```
 */
export const create_route_inflows__post = "/inflows/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [inflows]  
 * **OperationId**: list_route_inflows__get  
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
    	"toAccountIdIn"?: (string[]|null);
    	"categoryIn"?: (Shared.IInflowCategory[]|null);
    	"counterpartyIdIn"?: (string[]|null);
    	"financialFlowIdIn"?: (string[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_inflows__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_inflows__get422Response
```  
```bash  
curl /inflows/ \
 -X GET
```
 */
export const list_route_inflows__get = "/inflows/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [inflows]  
 * **OperationId**: get_route_inflows__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_inflows__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_inflows__id__get422Response
```  
```bash  
curl /inflows/{id} \
 -X GET
```
 */
export const get_route_inflows__id__get = (id:string)=> `/inflows/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [inflows]  
 * **OperationId**: update_route_inflows__id__put  
 * **DTO**: 
```typescript
    Shared.IInflowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_inflows__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_inflows__id__put422Response
```  
```bash  
curl /inflows/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "category": income,
        "counterparty_id": "string",
        "to_account_id": "string"
     }'
```
 */
export const update_route_inflows__id__put = (id:string)=> `/inflows/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [inflows]  
 * **OperationId**: delete_route_inflows__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_inflows__id__delete422Response
```  
```bash  
curl /inflows/{id} \
 -X DELETE
```
 */
export const delete_route_inflows__id__delete = (id:string)=> `/inflows/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================