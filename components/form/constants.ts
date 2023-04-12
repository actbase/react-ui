import { FormItemErrorStatusType } from './item.types';
import { FormValidateTimingType } from './form.types';

export const FORM_ITEM_ERROR_STATUS = {
  READY: 'READY',
  PENDING: 'PENDING',
  DONE: 'DONE',
  ERROR: 'ERROR',
} satisfies Record<FormItemErrorStatusType, FormItemErrorStatusType>;

export const FORM_VALIDATE_TIMING = {
  ON_SUBMIT: 'ON_SUBMIT',
  ON_CHANGE: 'ON_CHANGE',
} satisfies Record<FormValidateTimingType, FormValidateTimingType>;
