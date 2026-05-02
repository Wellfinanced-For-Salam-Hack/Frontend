import * as Shared from "../shared";

export type Icreate_route_installments__postDTO = Shared.IInstallmentCreationRequest;
export type Icreate_route_installments__post200Response = Shared.ISuccessResponse_InstallmentSummaryResponse_;
export type Icreate_route_installments__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_installments__getQuery = {
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
};
export type Ilist_route_installments__get200Response = Shared.ISuccessResponse_OffsetPagination_InstallmentSummaryResponse__;
export type Ilist_route_installments__get422Response = Shared.IHTTPValidationError;
export type Iget_route_installments__id__get200Response = Shared.ISuccessResponse_InstallmentDetailsResponse_;
export type Iget_route_installments__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_installments__id__putDTO = Shared.IInstallmentCreationRequest;
export type Iupdate_route_installments__id__put200Response = Shared.ISuccessResponse_InstallmentDetailsResponse_;
export type Iupdate_route_installments__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_installments__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================