/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [outflows]  
 * **OperationId**: create_route_outflows__post  
 * **DTO**: 
```typescript
    Shared.IOutflowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_outflows__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_outflows__post422Response
```  
```bash  
curl /outflows/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "category": consumable,
        "from_account_id": "string",
        "counterparty_id": "string",
        "asset_id": "string"
     }'
```
 */
export const create_route_outflows__post = "/outflows/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [outflows]  
 * **OperationId**: list_route_outflows__get  
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
      Ilist_route_outflows__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_outflows__get422Response
```  
```bash  
curl /outflows/ \
 -X GET
```
 */
export const list_route_outflows__get = "/outflows/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [outflows]  
 * **OperationId**: get_route_outflows__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_outflows__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_outflows__id__get422Response
```  
```bash  
curl /outflows/{id} \
 -X GET
```
 */
export const get_route_outflows__id__get = (id:string)=> `/outflows/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [outflows]  
 * **OperationId**: update_route_outflows__id__put  
 * **DTO**: 
```typescript
    Shared.IOutflowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_outflows__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_outflows__id__put422Response
```  
```bash  
curl /outflows/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "category": consumable,
        "from_account_id": "string",
        "counterparty_id": "string",
        "asset_id": "string"
     }'
```
 */
export const update_route_outflows__id__put = (id:string)=> `/outflows/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [outflows]  
 * **OperationId**: delete_route_outflows__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_outflows__id__delete422Response
```  
```bash  
curl /outflows/{id} \
 -X DELETE
```
 */
export const delete_route_outflows__id__delete = (id:string)=> `/outflows/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================