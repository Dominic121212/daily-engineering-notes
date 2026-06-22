/**
 * Module: utils
 * Updated: 2026-06-22T20:25:31 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.82.7'
};
