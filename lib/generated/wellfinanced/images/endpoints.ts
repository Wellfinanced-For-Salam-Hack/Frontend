/**
 * **Method**: `POST`  
 * **Summary**: Upload Image  
 * **Tags**: [images]  
 * **OperationId**: upload_image_images_uploads_post  
 * **DTO**: 
```typescript
    Shared.IBody_upload_image_images_uploads_post
```  
 * **Response**: 
    - **202**:  
```typescript
      Iupload_image_images_uploads_post202Response
```  
    - **422**:  
```typescript
      Iupload_image_images_uploads_post422Response
```  
```bash  
curl /images/uploads \
 -X POST \
 -H 'Content-type: multipart/form-data' \
 -d '{
        "file": "string"
     }'
```
 */
export const upload_image_images_uploads_post = "/images/uploads";
/**
 * **Method**: `GET`  
 * **Summary**: Download Image  
 * **Tags**: [images]  
 * **OperationId**: download_image_images_uploads__id__get  
 * **Response**: 
    - **200**:  
```typescript
      
```  
    - **422**:  
```typescript
      Idownload_image_images_uploads__id__get422Response
```  
```bash  
curl /images/uploads/{id} \
 -X GET
```
 */
export const download_image_images_uploads__id__get = (id:string)=> `/images/uploads/${id}`;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================