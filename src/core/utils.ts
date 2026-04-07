/**
 * Module: utils
 * Updated: 2026-04-07T22:36:20 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.69.24'
};
