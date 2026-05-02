import * as Shared from "../shared";

export type Icreate_route_flows__postDTO = Shared.IFinancialFlowCreationRequest;
export type Icreate_route_flows__post200Response = Shared.ISuccessResponse_FinancialFlowSummaryResponse_;
export type Icreate_route_flows__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_flows__getQuery = {
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
};
export type Ilist_route_flows__get200Response = Shared.ISuccessResponse_OffsetPagination_FinancialFlowSummaryResponse__;
export type Ilist_route_flows__get422Response = Shared.IHTTPValidationError;
export type Iget_route_flows__id__get200Response = Shared.ISuccessResponse_FinancialFlowDetailsResponse_;
export type Iget_route_flows__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_flows__id__putDTO = Shared.IFinancialFlowCreationRequest;
export type Iupdate_route_flows__id__put200Response = Shared.ISuccessResponse_FinancialFlowDetailsResponse_;
export type Iupdate_route_flows__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_flows__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================