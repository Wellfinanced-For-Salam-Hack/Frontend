/**
 * **Method**: `GET`  
 * **Summary**: Users:Current User  
 * **Tags**: [users]  
 * **OperationId**: users_current_user_auth_users_me_get  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/users/me \
 -X GET \
 -H 'Authorization: Bearer {TOKEN}'
```
 */
export const users_current_user_auth_users_me_get = "/auth/users/me";
/**
 * **Method**: `PATCH`  
 * **Summary**: Users:Patch Current User  
 * **Tags**: [users]  
 * **OperationId**: users_patch_current_user_auth_users_me_patch  
 * **DTO**: 
```typescript
    Shared.IUserUpdate
```  
 * **Response**: 
    - **200**:  
```typescript
      Iusers_patch_current_user_auth_users_me_patch200Response
```  
    - **400**:  
```typescript
      Iusers_patch_current_user_auth_users_me_patch400Response
```  
    - **401**:  
```typescript
      
```  
    - **422**:  
```typescript
      Iusers_patch_current_user_auth_users_me_patch422Response
```  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/users/me \
 -X PATCH \
 -H 'Content-type: application/json' \
 -H 'Authorization: Bearer {TOKEN}' \
 -d '{
        "password": "string",
        "email": "string",
        "is_active": true,
        "is_superuser": true,
        "is_verified": true
     }'
```
 */
export const users_patch_current_user_auth_users_me_patch = "/auth/users/me";
/**
 * **Method**: `GET`  
 * **Summary**: Users:User  
 * **Tags**: [users]  
 * **OperationId**: users_user_auth_users__id__get  
 * **Response**: 
    - **200**:  
```typescript
      Iusers_user_auth_users__id__get200Response
```  
    - **401**:  
```typescript
      
```  
    - **403**:  
```typescript
      
```  
    - **404**:  
```typescript
      
```  
    - **422**:  
```typescript
      Iusers_user_auth_users__id__get422Response
```  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/users/{id} \
 -X GET \
 -H 'Authorization: Bearer {TOKEN}'
```
 */
export const users_user_auth_users__id__get = (id:string)=> `/auth/users/${id}`;
/**
 * **Method**: `PATCH`  
 * **Summary**: Users:Patch User  
 * **Tags**: [users]  
 * **OperationId**: users_patch_user_auth_users__id__patch  
 * **DTO**: 
```typescript
    Shared.IUserUpdate
```  
 * **Response**: 
    - **200**:  
```typescript
      Iusers_patch_user_auth_users__id__patch200Response
```  
    - **400**:  
```typescript
      Iusers_patch_user_auth_users__id__patch400Response
```  
    - **401**:  
```typescript
      
```  
    - **403**:  
```typescript
      
```  
    - **404**:  
```typescript
      
```  
    - **422**:  
```typescript
      Iusers_patch_user_auth_users__id__patch422Response
```  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/users/{id} \
 -X PATCH \
 -H 'Content-type: application/json' \
 -H 'Authorization: Bearer {TOKEN}' \
 -d '{
        "password": "string",
        "email": "string",
        "is_active": true,
        "is_superuser": true,
        "is_verified": true
     }'
```
 */
export const users_patch_user_auth_users__id__patch = (id:string)=> `/auth/users/${id}`;
/**
 * **Method**: `DELETE`  
 * **Summary**: Users:Delete User  
 * **Tags**: [users]  
 * **OperationId**: users_delete_user_auth_users__id__delete  
 * **Response**: 
    - **204**:  
```typescript
      
```  
    - **401**:  
```typescript
      
```  
    - **403**:  
```typescript
      
```  
    - **404**:  
```typescript
      
```  
    - **422**:  
```typescript
      Iusers_delete_user_auth_users__id__delete422Response
```  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/users/{id} \
 -X DELETE \
 -H 'Authorization: Bearer {TOKEN}'
```
 */
export const users_delete_user_auth_users__id__delete = (id:string)=> `/auth/users/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================