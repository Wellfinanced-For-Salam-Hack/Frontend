export type IAccountCategory = ("cash"|"checking"|"savings"|"wallet"|"investment"|"receivable"|"escrow");

export type IAccountCreationRequest = {
	"label": string;
	"description": (string|null);
	"institution": (string|null);
	"currency": ICurrency;
	"current_balance": (number|string);
	"status": IAccountStatus;
	"category": IAccountCategory;
};

export type IAccountDetailsResponse = {
	"label": string;
	"description": (string|null);
	"institution": (string|null);
	"currency": ICurrency;
	"current_balance": string;
	"status": IAccountStatus;
	"category": IAccountCategory;
	"id": string;
	"created_at": string;
	"incoming_records": IRecordSummaryResponse[];
	"outgoing_records": IRecordSummaryResponse[];
};

export type IAccountStatus = ("active"|"archived"|"inactive"|"closed"|"frozen"|"hidden"|"pending");

export type IAccountSummaryResponse = {
	"label": string;
	"description": (string|null);
	"institution": (string|null);
	"currency": ICurrency;
	"current_balance": string;
	"status": IAccountStatus;
	"category": IAccountCategory;
	"id": string;
	"created_at": string;
	"incoming_record_ids": string[];
	"outgoing_record_ids": string[];
};

export type IAssetCategory = ("stocks"|"property");

export type IAssetCreationRequest = {
	"estimate_value": (number|string);
	"category": IAssetCategory;
	"status": IAssetStatus;
};

export type IAssetResponseSchema = {
	"estimate_value": string;
	"category": IAssetCategory;
	"status": IAssetStatus;
	"id": string;
	"created_at": string;
};

export type IAssetStatus = ("active"|"idle_reserved"|"temporarily_unavailable"|"impaired"|"disposed_retired"|"written_off");

export type IBearerResponse = {
	"access_token": string;
	"token_type": string;
};

export type IBody_auth_jwt_login_auth_login_post = {
	"grant_type"?: (string|null);
	"username": string;
	"password": string;
	"scope"?: string;
	"client_id"?: (string|null);
	"client_secret"?: (string|null);
};

export type IBody_reset_forgot_password_auth_forgot_password_post = {
	"email": string;
};

export type IBody_reset_reset_password_auth_reset_password_post = {
	"token": string;
	"password": string;
};

export type IBody_upload_image_images_uploads_post = {
	"file": string;
};

export type IBody_verify_request_token_auth_request_verify_token_post = {
	"email": string;
};

export type IBody_verify_verify_auth_verify_post = {
	"token": string;
};

export type ICounterpartyCategory = ("individual"|"business"|"ngo"|"government");

export type ICounterpartyCreationRequest = {
	"label": string;
	"description": (string|null);
	"category": ICounterpartyCategory;
};

export type ICounterpartyDetailsResponse = {
	"label": string;
	"description": (string|null);
	"category": ICounterpartyCategory;
	"id": string;
	"created_at": string;
	"financial_flows": IFinancialFlowSummaryResponse[];
};

export type ICounterpartySummaryResponse = {
	"label": string;
	"description": (string|null);
	"category": ICounterpartyCategory;
	"id": string;
	"created_at": string;
	"financial_flows_ids": string[];
};

export type ICurrency = "EGP";

export type IErrorModel = {
	"detail": (string|{[k: string]: string});
};

export type IFinancialFlowCategory = ("salary_wages"|"prize"|"freelance_contract_payment"|"business_revenue"|"investment_dividend"|"property_rent"|"government_benefits_aid"|"scholarship_stipend"|"ngo_charity_donation"|"friends_family_gift"|"inheritance"|"compensation_insurance"|"debt"|"transfer"|"sell_assets_cash_out_investments"|"tax_payment_zakat"|"saving_goal");

export type IFinancialFlowCreationRequest = {
	"label": string;
	"description": (string|null);
	"category": IFinancialFlowCategory;
	"status": IFinancialFlowStatus;
	"counterparty_id": string;
};

export type IFinancialFlowDetailsResponse = {
	"label": string;
	"description": (string|null);
	"category": IFinancialFlowCategory;
	"status": IFinancialFlowStatus;
	"counterparty_id": string;
	"id": string;
	"created_at": string;
	"records": IRecordSummaryResponse[];
	"installments": IInstallmentSummaryResponse[];
};

export type IFinancialFlowStatus = ("active"|"inactive"|"closed");

export type IFinancialFlowSummaryResponse = {
	"label": string;
	"description": (string|null);
	"category": IFinancialFlowCategory;
	"status": IFinancialFlowStatus;
	"counterparty_id": string;
	"id": string;
	"created_at": string;
	"record_ids": string[];
	"installment_ids": string[];
};

export type IHTTPValidationError = {
	"detail"?: IValidationError[];
};

export type IImageSummaryResponse = {
	"id": string;
	"width": number;
	"height": number;
	"file": string;
	"format": string;
};

export type IInflowCategory = ("income"|"support"|"liability");

export type IInflowCreationRequest = {
	"currency": ICurrency;
	"amount": (number|string);
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IInflowCategory;
	"counterparty_id": string;
	"to_account_id": string;
};

export type IInflowDetailsResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IInflowCategory;
	"counterparty_id": string;
	"to_account_id": string;
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
	"financial_flow": (IFinancialFlowSummaryResponse|null);
	"counterparty": ICounterpartySummaryResponse;
	"to_account": IAccountSummaryResponse;
};

export type IInflowSummaryResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IInflowCategory;
	"counterparty_id": string;
	"to_account_id": string;
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
};

export type IInstallmentCreationRequest = {
	"direction": IInstallmentDirection;
	"financial_flow_id": string;
	"amount": (number|string);
	"currency": ICurrency;
	"scheduled_for": string;
	"rescheduled_from_installment_id"?: (string|null);
	"status": IInstallmentStatus;
};

export type IInstallmentDetailsResponse = {
	"direction": IInstallmentDirection;
	"financial_flow_id": string;
	"amount": string;
	"currency": ICurrency;
	"scheduled_for": string;
	"rescheduled_from_installment_id"?: (string|null);
	"status": IInstallmentStatus;
	"id": string;
	"financial_flow": (IFinancialFlowSummaryResponse|null);
	"notification_ids": string[];
};

export type IInstallmentDirection = ("inflow"|"outflow");

export type IInstallmentStatus = ("pending"|"completed"|"missed");

export type IInstallmentSummaryResponse = {
	"direction": IInstallmentDirection;
	"financial_flow_id": string;
	"amount": string;
	"currency": ICurrency;
	"scheduled_for": string;
	"rescheduled_from_installment_id"?: (string|null);
	"status": IInstallmentStatus;
	"id": string;
	"notification_ids": string[];
};

export type IOffsetPagination_AccountSummaryResponse_ = {
	"items": IAccountSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_AssetResponseSchema_ = {
	"items": IAssetResponseSchema[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_CounterpartySummaryResponse_ = {
	"items": ICounterpartySummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_FinancialFlowSummaryResponse_ = {
	"items": IFinancialFlowSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_InflowSummaryResponse_ = {
	"items": IInflowSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_InstallmentSummaryResponse_ = {
	"items": IInstallmentSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_OutflowSummaryResponse_ = {
	"items": IOutflowSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_ScheduleResponseSchema_ = {
	"items": IScheduleResponseSchema[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOffsetPagination_TransferSummaryResponse_ = {
	"items": ITransferSummaryResponse[];
	"limit": number;
	"offset": number;
	"total": number;
};

export type IOutflowCategory = ("consumable"|"purchase"|"payment");

export type IOutflowCreationRequest = {
	"currency": ICurrency;
	"amount": (number|string);
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IOutflowCategory;
	"from_account_id": string;
	"counterparty_id": string;
	"asset_id"?: (string|null);
};

export type IOutflowDetailsResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IOutflowCategory;
	"from_account_id": string;
	"counterparty_id": string;
	"asset_id"?: (string|null);
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
	"financial_flow": (IFinancialFlowSummaryResponse|null);
	"from_account": IAccountSummaryResponse;
	"counterparty": ICounterpartySummaryResponse;
	"asset": (IAssetResponseSchema|null);
};

export type IOutflowSummaryResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"category": IOutflowCategory;
	"from_account_id": string;
	"counterparty_id": string;
	"asset_id"?: (string|null);
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
};

export type IRecordDirection = ("default"|"inflow"|"outflow"|"transfer");

export type IRecordSummaryResponse = {
	"direction": IRecordDirection;
	"currency": ICurrency;
	"amount": string;
	"notes": (string|null);
	"id": string;
	"financial_flow_id": (string|null);
};

export type IScheduleCreationRequest = {
	"start_year"?: (number|null);
	"end_year"?: (number|null);
	"start_month"?: (number|null);
	"end_month"?: (number|null);
	"start_day_of_month"?: (number|null);
	"end_day_of_month"?: (number|null);
	"start_day_of_week"?: (number|null);
	"end_day_of_week"?: (number|null);
	"start_hour"?: (number|null);
	"end_hour"?: (number|null);
	"start_minute"?: (number|null);
	"end_minute"?: (number|null);
};

export type IScheduleResponseSchema = {
	"start_year"?: (number|null);
	"end_year"?: (number|null);
	"start_month"?: (number|null);
	"end_month"?: (number|null);
	"start_day_of_month"?: (number|null);
	"end_day_of_month"?: (number|null);
	"start_day_of_week"?: (number|null);
	"end_day_of_week"?: (number|null);
	"start_hour"?: (number|null);
	"end_hour"?: (number|null);
	"start_minute"?: (number|null);
	"end_minute"?: (number|null);
	"id": string;
};

export type ISuccessResponse_AccountDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IAccountDetailsResponse|null);
};

export type ISuccessResponse_AccountSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IAccountSummaryResponse|null);
};

export type ISuccessResponse_AssetResponseSchema_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IAssetResponseSchema|null);
};

export type ISuccessResponse_CounterpartyDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (ICounterpartyDetailsResponse|null);
};

export type ISuccessResponse_CounterpartySummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (ICounterpartySummaryResponse|null);
};

export type ISuccessResponse_FinancialFlowDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IFinancialFlowDetailsResponse|null);
};

export type ISuccessResponse_FinancialFlowSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IFinancialFlowSummaryResponse|null);
};

export type ISuccessResponse_ImageSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IImageSummaryResponse|null);
};

export type ISuccessResponse_InflowDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IInflowDetailsResponse|null);
};

export type ISuccessResponse_InflowSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IInflowSummaryResponse|null);
};

export type ISuccessResponse_InstallmentDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IInstallmentDetailsResponse|null);
};

export type ISuccessResponse_InstallmentSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IInstallmentSummaryResponse|null);
};

export type ISuccessResponse_OffsetPagination_AccountSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_AccountSummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_AssetResponseSchema__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_AssetResponseSchema_|null);
};

export type ISuccessResponse_OffsetPagination_CounterpartySummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_CounterpartySummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_FinancialFlowSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_FinancialFlowSummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_InflowSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_InflowSummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_InstallmentSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_InstallmentSummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_OutflowSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_OutflowSummaryResponse_|null);
};

export type ISuccessResponse_OffsetPagination_ScheduleResponseSchema__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_ScheduleResponseSchema_|null);
};

export type ISuccessResponse_OffsetPagination_TransferSummaryResponse__ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOffsetPagination_TransferSummaryResponse_|null);
};

export type ISuccessResponse_OutflowDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOutflowDetailsResponse|null);
};

export type ISuccessResponse_OutflowSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IOutflowSummaryResponse|null);
};

export type ISuccessResponse_ScheduleResponseSchema_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (IScheduleResponseSchema|null);
};

export type ISuccessResponse_TransferDetailsResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (ITransferDetailsResponse|null);
};

export type ISuccessResponse_TransferSummaryResponse_ = {
	"type"?: string;
	"title"?: string;
	"status"?: number;
	"detail"?: (string|null);
	"data"?: (ITransferSummaryResponse|null);
};

export type ITransferCreationRequest = {
	"currency": ICurrency;
	"amount": (number|string);
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"from_account_id": string;
	"to_account_id": string;
};

export type ITransferDetailsResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"from_account_id": string;
	"to_account_id": string;
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
	"financial_flow": (IFinancialFlowSummaryResponse|null);
	"from_account": (IAccountSummaryResponse|null);
	"to_account": (IAccountSummaryResponse|null);
};

export type ITransferSummaryResponse = {
	"currency": ICurrency;
	"amount": string;
	"notes"?: (string|null);
	"financial_flow_id"?: (string|null);
	"from_account_id": string;
	"to_account_id": string;
	"id": string;
	"created_at": string;
	"direction": IRecordDirection;
};

export type IUserCreate = {
	"email": string;
	"password": string;
	"is_active"?: (boolean|null);
	"is_superuser"?: (boolean|null);
	"is_verified"?: (boolean|null);
};

export type IUserRead = {
	"id": string;
	"email": string;
	"is_active"?: boolean;
	"is_superuser"?: boolean;
	"is_verified"?: boolean;
};

export type IUserUpdate = {
	"password"?: (string|null);
	"email"?: (string|null);
	"is_active"?: (boolean|null);
	"is_superuser"?: (boolean|null);
	"is_verified"?: (boolean|null);
};

export type IValidationError = {
	"loc": (string|number)[];
	"msg": string;
	"type": string;
};






























// ============================================================
// 🔒 CUSTOM CODE START
// Add your custom code above this line
// This section will be preserved during regeneration
// ============================================================

// 🔒 CUSTOM CODE END
// ============================================================