/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [transfers]  
 * **OperationId**: create_route_transfers__post  
 * **DTO**: 
```typescript
    Shared.ITransferCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_transfers__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_transfers__post422Response
```  
```bash  
curl /transfers/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "from_account_id": "string",
        "to_account_id": "string"
     }'
```
 */
export const create_route_transfers__post = "/transfers/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [transfers]  
 * **OperationId**: list_route_transfers__get  
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
      Ilist_route_transfers__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_transfers__get422Response
```  
```bash  
curl /transfers/ \
 -X GET
```
 */
export const list_route_transfers__get = "/transfers/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [transfers]  
 * **OperationId**: get_route_transfers__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_transfers__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_transfers__id__get422Response
```  
```bash  
curl /transfers/{id} \
 -X GET
```
 */
export const get_route_transfers__id__get = (id:string)=> `/transfers/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [transfers]  
 * **OperationId**: update_route_transfers__id__put  
 * **DTO**: 
```typescript
    Shared.ITransferCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_transfers__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_transfers__id__put422Response
```  
```bash  
curl /transfers/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "currency": ,
        "amount": 123,
        "notes": "string",
        "financial_flow_id": "string",
        "from_account_id": "string",
        "to_account_id": "string"
     }'
```
 */
export const update_route_transfers__id__put = (id:string)=> `/transfers/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [transfers]  
 * **OperationId**: delete_route_transfers__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_transfers__id__delete422Response
```  
```bash  
curl /transfers/{id} \
 -X DELETE
```
 */
export const delete_route_transfers__id__delete = (id:string)=> `/transfers/${id}`;
























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================