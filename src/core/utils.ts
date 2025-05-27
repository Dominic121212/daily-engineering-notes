/**
 * Module: utils
 * Updated: 2025-05-27T10:18:30 (+0800)
 * Summary: handle timezone boundary offset in date formatter
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.22.5'
};
