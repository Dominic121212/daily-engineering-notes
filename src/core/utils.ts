/**
 * Module: utils
 * Updated: 2026-05-25T20:54:20 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.77.7'
};
