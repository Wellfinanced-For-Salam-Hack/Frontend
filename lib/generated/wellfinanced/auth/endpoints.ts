/**
 * **Method**: `POST`  
 * **Summary**: Auth:Jwt.Login  
 * **Tags**: [auth]  
 * **OperationId**: auth_jwt_login_auth_login_post  
 * **DTO**: 
```typescript
    Shared.IBody_auth_jwt_login_auth_login_post
```  
 * **Response**: 
    - **200**:  
```typescript
      Iauth_jwt_login_auth_login_post200Response
```  
    - **400**:  
```typescript
      Iauth_jwt_login_auth_login_post400Response
```  
    - **422**:  
```typescript
      Iauth_jwt_login_auth_login_post422Response
```  
```bash  
curl /auth/login \
 -X POST \
 -H 'Content-type: application/x-www-form-urlencoded' \
 -d '{
        "grant_type": "string",
        "username": "string",
        "password": "string",
        "scope": "string",
        "client_id": "string",
        "client_secret": "string"
     }'
```
 */
export const auth_jwt_login_auth_login_post = "/auth/login";
/**
 * **Method**: `POST`  
 * **Summary**: Auth:Jwt.Logout  
 * **Tags**: [auth]  
 * **OperationId**: auth_jwt_logout_auth_logout_post  
 * **Security**:  
    - OAuth2PasswordBearer

```bash  
curl /auth/logout \
 -X POST \
 -H 'Authorization: Bearer {TOKEN}'
```
 */
export const auth_jwt_logout_auth_logout_post = "/auth/logout";
/**
 * **Method**: `POST`  
 * **Summary**: Register:Register  
 * **Tags**: [auth]  
 * **OperationId**: register_register_auth_register_post  
 * **DTO**: 
```typescript
    Shared.IUserCreate
```  
 * **Response**: 
    - **201**:  
```typescript
      Iregister_register_auth_register_post201Response
```  
    - **400**:  
```typescript
      Iregister_register_auth_register_post400Response
```  
    - **422**:  
```typescript
      Iregister_register_auth_register_post422Response
```  
```bash  
curl /auth/register \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "email": "string",
        "password": "string",
        "is_active": true,
        "is_superuser": true,
        "is_verified": true
     }'
```
 */
export const register_register_auth_register_post = "/auth/register";
/**
 * **Method**: `POST`  
 * **Summary**: Reset:Forgot Password  
 * **Tags**: [auth]  
 * **OperationId**: reset_forgot_password_auth_forgot_password_post  
 * **DTO**: 
```typescript
    Shared.IBody_reset_forgot_password_auth_forgot_password_post
```  
 * **Response**: 
    - **202**:  
```typescript
      Ireset_forgot_password_auth_forgot_password_post202Response
```  
    - **422**:  
```typescript
      Ireset_forgot_password_auth_forgot_password_post422Response
```  
```bash  
curl /auth/forgot-password \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "email": "string"
     }'
```
 */
export const reset_forgot_password_auth_forgot_password_post = "/auth/forgot-password";
/**
 * **Method**: `POST`  
 * **Summary**: Reset:Reset Password  
 * **Tags**: [auth]  
 * **OperationId**: reset_reset_password_auth_reset_password_post  
 * **DTO**: 
```typescript
    Shared.IBody_reset_reset_password_auth_reset_password_post
```  
 * **Response**: 
    - **200**:  
```typescript
      Ireset_reset_password_auth_reset_password_post200Response
```  
    - **400**:  
```typescript
      Ireset_reset_password_auth_reset_password_post400Response
```  
    - **422**:  
```typescript
      Ireset_reset_password_auth_reset_password_post422Response
```  
```bash  
curl /auth/reset-password \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "token": "string",
        "password": "string"
     }'
```
 */
export const reset_reset_password_auth_reset_password_post = "/auth/reset-password";
/**
 * **Method**: `POST`  
 * **Summary**: Verify:Request-Token  
 * **Tags**: [auth]  
 * **OperationId**: verify_request_token_auth_request_verify_token_post  
 * **DTO**: 
```typescript
    Shared.IBody_verify_request_token_auth_request_verify_token_post
```  
 * **Response**: 
    - **202**:  
```typescript
      Iverify_request_token_auth_request_verify_token_post202Response
```  
    - **422**:  
```typescript
      Iverify_request_token_auth_request_verify_token_post422Response
```  
```bash  
curl /auth/request-verify-token \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "email": "string"
     }'
```
 */
export const verify_request_token_auth_request_verify_token_post = "/auth/request-verify-token";
/**
 * **Method**: `POST`  
 * **Summary**: Verify:Verify  
 * **Tags**: [auth]  
 * **OperationId**: verify_verify_auth_verify_post  
 * **DTO**: 
```typescript
    Shared.IBody_verify_verify_auth_verify_post
```  
 * **Response**: 
    - **200**:  
```typescript
      Iverify_verify_auth_verify_post200Response
```  
    - **400**:  
```typescript
      Iverify_verify_auth_verify_post400Response
```  
    - **422**:  
```typescript
      Iverify_verify_auth_verify_post422Response
```  
```bash  
curl /auth/verify \
 -X POST \
 -H 'Content-type: application/json' \
 -d '{
        "token": "string"
     }'
```
 */
export const verify_verify_auth_verify_post = "/auth/verify";






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================