export interface PlanEligibilityModel {
  loading: boolean;
  loaded: boolean;
  data: PlanEligibilityList[] | null;
}

export interface PlanEligibilityList {
  id?: string;
  processApplicable: string;
  planName: string;
  planPeriodFrom: string;
  planPeriodTo: string;
  applicableCalenderFrom: string;
  applicableCalenderTo: string;
  effectiveDate: string;
}
