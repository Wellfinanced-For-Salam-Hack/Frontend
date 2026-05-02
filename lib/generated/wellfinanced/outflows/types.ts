import * as Shared from "../shared";

export type Icreate_route_outflows__postDTO = Shared.IOutflowCreationRequest;
export type Icreate_route_outflows__post200Response = Shared.ISuccessResponse_OutflowSummaryResponse_;
export type Icreate_route_outflows__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_outflows__getQuery = {
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
};
export type Ilist_route_outflows__get200Response = Shared.ISuccessResponse_OffsetPagination_OutflowSummaryResponse__;
export type Ilist_route_outflows__get422Response = Shared.IHTTPValidationError;
export type Iget_route_outflows__id__get200Response = Shared.ISuccessResponse_OutflowDetailsResponse_;
export type Iget_route_outflows__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_outflows__id__putDTO = Shared.IOutflowCreationRequest;
export type Iupdate_route_outflows__id__put200Response = Shared.ISuccessResponse_OutflowDetailsResponse_;
export type Iupdate_route_outflows__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_outflows__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================