/**
 * Module: utils
 * Updated: 2026-08-06T17:52:33 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.89.11'
};
