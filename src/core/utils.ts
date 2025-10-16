/**
 * Module: utils
 * Updated: 2025-10-16T20:31:52 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.43.18'
};
