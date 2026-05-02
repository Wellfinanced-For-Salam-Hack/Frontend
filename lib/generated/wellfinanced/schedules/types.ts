import * as Shared from "../shared";

export type Icreate_route_schedules__postDTO = Shared.IScheduleCreationRequest;
export type Icreate_route_schedules__post200Response = Shared.ISuccessResponse_ScheduleResponseSchema_;
export type Icreate_route_schedules__post422Response = Shared.IHTTPValidationError;
export type Ilist_route_schedules__getQuery = {
	"ids"?: (string[]|null);
};
export type Ilist_route_schedules__get200Response = Shared.ISuccessResponse_OffsetPagination_ScheduleResponseSchema__;
export type Ilist_route_schedules__get422Response = Shared.IHTTPValidationError;
export type Iget_route_schedules__id__get200Response = Shared.ISuccessResponse_ScheduleResponseSchema_;
export type Iget_route_schedules__id__get422Response = Shared.IHTTPValidationError;
export type Iupdate_route_schedules__id__putDTO = Shared.IScheduleCreationRequest;
export type Iupdate_route_schedules__id__put200Response = Shared.ISuccessResponse_ScheduleResponseSchema_;
export type Iupdate_route_schedules__id__put422Response = Shared.IHTTPValidationError;
export type Idelete_route_schedules__id__delete422Response = Shared.IHTTPValidationError;






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================