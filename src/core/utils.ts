/**
 * Module: utils
 * Updated: 2025-03-25T12:53:49 (+0800)
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
  revision: '0.13.2'
};
