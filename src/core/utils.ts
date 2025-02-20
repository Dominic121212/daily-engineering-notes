/**
 * Module: utils
 * Updated: 2025-02-20T19:59:18 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.7.24'
};
