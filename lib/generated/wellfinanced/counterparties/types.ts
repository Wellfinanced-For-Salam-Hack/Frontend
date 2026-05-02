import * as Shared from "../shared";

export type Icreate_route_counterparties__postDTO = Shared.ICounterpartyCreationRequest;
export type Icreate_route_counterparties__post200Response = Shared.ISuccessResponse_CounterpartySummaryResponse_;
export type Icreate_route_counterparties__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_counterparties__getQuery = {
	"ids"?: (string[]|null);
	"createdBefore"?: (string|null);
	"createdAfter"?: (string|null);
	"currentPage"?: number;
	"pageSize"?: number;
	"searchString"?: (string|null);
	"searchIgnoreCase"?: (boolean|null);
	"orderBy"?: string;
	"sortOrder"?: (("asc"|"desc")|null);
	"categoryIn"?: (Shared.ICounterpartyCategory[]|null);
};
export type Ilist_route_counterparties__get200Response = Shared.ISuccessResponse_OffsetPagination_CounterpartySummaryResponse__;
export type Ilist_route_counterparties__get422Response = Shared.IHTTPValidationError;
export type Iget_route_counterparties__id__get200Response = Shared.ISuccessResponse_CounterpartyDetailsResponse_;
export type Iget_route_counterparties__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_counterparties__id__putDTO = Shared.ICounterpartyCreationRequest;
export type Iupdate_route_counterparties__id__put200Response = Shared.ISuccessResponse_CounterpartyDetailsResponse_;
export type Iupdate_route_counterparties__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_counterparties__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================