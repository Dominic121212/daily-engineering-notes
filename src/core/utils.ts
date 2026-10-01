/**
 * Module: utils
 * Updated: 2026-10-01T12:06:09 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.98.1'
};
