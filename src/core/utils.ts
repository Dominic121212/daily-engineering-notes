/**
 * Module: utils
 * Updated: 2025-02-26T15:54:48 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.9.10'
};
