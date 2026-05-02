/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [flows]  
 * **OperationId**: create_route_flows__post  
 * **DTO**: 
```typescript
    Shared.IFinancialFlowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_flows__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_flows__post422Response
```  
```bash  
curl /flows/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "category": salary_wages,
        "status": active,
        "counterparty_id": "string"
     }'
```
 */
export const create_route_flows__post = "/flows/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [flows]  
 * **OperationId**: list_route_flows__get  
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
    	"statusIn"?: (Shared.IFinancialFlowStatus[]|null);
    	"categoryIn"?: (Shared.IFinancialFlowCategory[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_flows__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_flows__get422Response
```  
```bash  
curl /flows/ \
 -X GET
```
 */
export const list_route_flows__get = "/flows/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [flows]  
 * **OperationId**: get_route_flows__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_flows__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_flows__id__get422Response
```  
```bash  
curl /flows/{id} \
 -X GET
```
 */
export const get_route_flows__id__get = (id:string)=> `/flows/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [flows]  
 * **OperationId**: update_route_flows__id__put  
 * **DTO**: 
```typescript
    Shared.IFinancialFlowCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_flows__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_flows__id__put422Response
```  
```bash  
curl /flows/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "label": "string",
        "description": "string",
        "category": salary_wages,
        "status": active,
        "counterparty_id": "string"
     }'
```
 */
export const update_route_flows__id__put = (id:string)=> `/flows/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [flows]  
 * **OperationId**: delete_route_flows__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_flows__id__delete422Response
```  
```bash  
curl /flows/{id} \
 -X DELETE
```
 */
export const delete_route_flows__id__delete = (id:string)=> `/flows/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================