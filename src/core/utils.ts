/**
 * Module: utils
 * Updated: 2026-07-23T15:36:32 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.87.5'
};
