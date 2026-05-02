import * as Shared from "../shared";

export type Icreate_route_inflows__postDTO = Shared.IInflowCreationRequest;
export type Icreate_route_inflows__post200Response = Shared.ISuccessResponse_InflowSummaryResponse_;
export type Icreate_route_inflows__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_inflows__getQuery = {
	"ids"?: (string[]|null);
	"createdBefore"?: (string|null);
	"createdAfter"?: (string|null);
	"currentPage"?: number;
	"pageSize"?: number;
	"searchString"?: (string|null);
	"searchIgnoreCase"?: (boolean|null);
	"orderBy"?: string;
	"sortOrder"?: (("asc"|"desc")|null);
	"toAccountIdIn"?: (string[]|null);
	"categoryIn"?: (Shared.IInflowCategory[]|null);
	"counterpartyIdIn"?: (string[]|null);
	"financialFlowIdIn"?: (string[]|null);
};
export type Ilist_route_inflows__get200Response = Shared.ISuccessResponse_OffsetPagination_InflowSummaryResponse__;
export type Ilist_route_inflows__get422Response = Shared.IHTTPValidationError;
export type Iget_route_inflows__id__get200Response = Shared.ISuccessResponse_InflowDetailsResponse_;
export type Iget_route_inflows__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_inflows__id__putDTO = Shared.IInflowCreationRequest;
export type Iupdate_route_inflows__id__put200Response = Shared.ISuccessResponse_InflowDetailsResponse_;
export type Iupdate_route_inflows__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_inflows__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================