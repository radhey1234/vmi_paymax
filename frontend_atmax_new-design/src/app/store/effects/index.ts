import { ProcessEffect } from './process.effects';
import { UploadedFileDetailsEffect } from './uploaded-filedetails.effects';
import { CriteriaEffect } from './criteria.effects';
import { FormSettingEffect } from './formula-setting.effects';
import { RangeCreationEffect } from './range-creation.effects';
import { PopulationSelectionEffect } from './population-selection.effects';
import { EmployeeEligibilityExclusionEffect } from './employee-eligibility-exclusion.effects';
import { DataPreparationEffect } from './data-preparation.effects';
import { AuthEffect } from './auth.effects'
import { PlanEligibilityEffect } from './plan-eligibility-setting.effects'

export const effects = [AuthEffect, DataPreparationEffect, PlanEligibilityEffect, EmployeeEligibilityExclusionEffect, PopulationSelectionEffect, RangeCreationEffect, FormSettingEffect, CriteriaEffect, UploadedFileDetailsEffect, ProcessEffect]

export * from './auth.effects'
export * from './data-preparation.effects'
export * from './plan-eligibility-setting.effects'
export * from './population-selection.effects'
export * from './range-creation.effects'
export * from './formula-setting.effects'
export * from './criteria.effects'
export * from './uploaded-filedetails.effects'
export * from './process.effects';
