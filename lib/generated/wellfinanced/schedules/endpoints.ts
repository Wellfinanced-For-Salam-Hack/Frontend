/**
 * **Method**: `POST`  
 * **Summary**: Create Route  
 * **Tags**: [schedules]  
 * **OperationId**: create_route_schedules__post  
 * **DTO**: 
```typescript
    Shared.IScheduleCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Icreate_route_schedules__post200Response
```  
    - **422**:  
```typescript
      Icreate_route_schedules__post422Response
```  
```bash  
curl /schedules/ \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "start_year": 123,
        "end_year": 123,
        "start_month": 123,
        "end_month": 123,
        "start_day_of_month": 123,
        "end_day_of_month": 123,
        "start_day_of_week": 123,
        "end_day_of_week": 123,
        "start_hour": 123,
        "end_hour": 123,
        "start_minute": 123,
        "end_minute": 123
     }'
```
 */
export const create_route_schedules__post = "/schedules/";
/**
 * **Method**: `GET`  
 * **Summary**: List Route  
 * **Tags**: [schedules]  
 * **OperationId**: list_route_schedules__get  
 * **Query**: 
```typescript
    {
    	"ids"?: (string[]|null);
    }
```  
 * **Response**: 
    - **200**:  
```typescript
      Ilist_route_schedules__get200Response
```  
    - **422**:  
```typescript
      Ilist_route_schedules__get422Response
```  
```bash  
curl /schedules/ \
 -X GET
```
 */
export const list_route_schedules__get = "/schedules/";
/**
 * **Method**: `GET`  
 * **Summary**: Get Route  
 * **Tags**: [schedules]  
 * **OperationId**: get_route_schedules__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iget_route_schedules__id__get200Response
```  
    - **422**:  
```typescript
      Iget_route_schedules__id__get422Response
```  
```bash  
curl /schedules/{id} \
 -X GET
```
 */
export const get_route_schedules__id__get = (id:string)=> `/schedules/${id}`;
/**
 * **Method**: `PUT`  
 * **Summary**: Update Route  
 * **Tags**: [schedules]  
 * **OperationId**: update_route_schedules__id__put  
 * **DTO**: 
```typescript
    Shared.IScheduleCreationRequest
```  
 * **Response**: 
    - **200**:  
```typescript
      Iupdate_route_schedules__id__put200Response
```  
    - **422**:  
```typescript
      Iupdate_route_schedules__id__put422Response
```  
```bash  
curl /schedules/{id} \
 -X PUT \
 -H 'Content-type: application/json' \
 -d '{
        "start_year": 123,
        "end_year": 123,
        "start_month": 123,
        "end_month": 123,
        "start_day_of_month": 123,
        "end_day_of_month": 123,
        "start_day_of_week": 123,
        "end_day_of_week": 123,
        "start_hour": 123,
        "end_hour": 123,
        "start_minute": 123,
        "end_minute": 123
     }'
```
 */
export const update_route_schedules__id__put = (id:string)=> `/schedules/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Delete Route  
 * **Tags**: [schedules]  
 * **OperationId**: delete_route_schedules__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idelete_route_schedules__id__delete422Response
```  
```bash  
curl /schedules/{id} \
 -X DELETE
```
 */
export const delete_route_schedules__id__delete = (id:string)=> `/schedules/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================