import * as Shared from "../shared";

export type Icreate_route_transfers__postDTO = Shared.ITransferCreationRequest;
export type Icreate_route_transfers__post200Response = Shared.ISuccessResponse_TransferSummaryResponse_;
export type Icreate_route_transfers__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_transfers__getQuery = {
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
export type Ilist_route_transfers__get200Response = Shared.ISuccessResponse_OffsetPagination_TransferSummaryResponse__;
export type Ilist_route_transfers__get422Response = Shared.IHTTPValidationError;
export type Iget_route_transfers__id__get200Response = Shared.ISuccessResponse_TransferDetailsResponse_;
export type Iget_route_transfers__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_transfers__id__putDTO = Shared.ITransferCreationRequest;
export type Iupdate_route_transfers__id__put200Response = Shared.ISuccessResponse_TransferDetailsResponse_;
export type Iupdate_route_transfers__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_transfers__id__delete422Response = Shared.IHTTPValidationError;
























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================