/**
 * Module: utils
 * Updated: 2026-06-24T22:11:34 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.82.19'
};
