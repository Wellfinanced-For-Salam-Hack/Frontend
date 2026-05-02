import * as Shared from "../shared";

export type Icreate_route_accounts__postDTO = Shared.IAccountCreationRequest;
export type Icreate_route_accounts__post200Response = Shared.ISuccessResponse_AccountSummaryResponse_;
export type Icreate_route_accounts__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_accounts__getQuery = {
	"ids"?: (string[]|null);
	"createdBefore"?: (string|null);
	"createdAfter"?: (string|null);
	"currentPage"?: number;
	"pageSize"?: number;
	"searchString"?: (string|null);
	"searchIgnoreCase"?: (boolean|null);
	"orderBy"?: string;
	"sortOrder"?: (("asc"|"desc")|null);
	"categoryNotIn"?: (Shared.IAccountCategory[]|null);
	"statusNotIn"?: (Shared.IAccountStatus[]|null);
	"categoryIn"?: (Shared.IAccountCategory[]|null);
	"statusIn"?: (Shared.IAccountStatus[]|null);
};
export type Ilist_route_accounts__get200Response = Shared.ISuccessResponse_OffsetPagination_AccountSummaryResponse__;
export type Ilist_route_accounts__get422Response = Shared.IHTTPValidationError;
export type Iget_route_accounts__id__get200Response = Shared.ISuccessResponse_AccountDetailsResponse_;
export type Iget_route_accounts__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_accounts__id__putDTO = Shared.IAccountCreationRequest;
export type Iupdate_route_accounts__id__put200Response = Shared.ISuccessResponse_AccountDetailsResponse_;
export type Iupdate_route_accounts__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_accounts__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================