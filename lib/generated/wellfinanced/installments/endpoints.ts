/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [installments]  
 * **OperationId**: create_route_installments__post  
 * **DTO**: 
```typescript
    Shared.IInstallmentCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_installments__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_installments__post422Response
```  
```bash  
curl /installments/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "direction": inflow,
        "financial_flow_id": "string",
        "amount": 123,
        "currency": ,
        "scheduled_for": "string",
        "rescheduled_from_installment_id": "string",
        "status": pending
     }'
```
 */
export const create_route_installments__post = "/installments/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [installments]  
 * **OperationId**: list_route_installments__get  
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
    	"statusIn"?: (Shared.IInstallmentStatus[]|null);
    	"financialFlowIdIn"?: (string[]|null);
    	"directionIn"?: (Shared.IInstallmentDirection[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_installments__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_installments__get422Response
```  
```bash  
curl /installments/ \
 -X GET
```
 */
export const list_route_installments__get = "/installments/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [installments]  
 * **OperationId**: get_route_installments__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_installments__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_installments__id__get422Response
```  
```bash  
curl /installments/{id} \
 -X GET
```
 */
export const get_route_installments__id__get = (id:string)=> `/installments/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [installments]  
 * **OperationId**: update_route_installments__id__put  
 * **DTO**: 
```typescript
    Shared.IInstallmentCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_installments__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_installments__id__put422Response
```  
```bash  
curl /installments/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "direction": inflow,
        "financial_flow_id": "string",
        "amount": 123,
        "currency": ,
        "scheduled_for": "string",
        "rescheduled_from_installment_id": "string",
        "status": pending
     }'
```
 */
export const update_route_installments__id__put = (id:string)=> `/installments/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [installments]  
 * **OperationId**: delete_route_installments__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_installments__id__delete422Response
```  
```bash  
curl /installments/{id} \
 -X DELETE
```
 */
export const delete_route_installments__id__delete = (id:string)=> `/installments/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================