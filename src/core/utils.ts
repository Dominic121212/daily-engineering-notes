/**
 * Module: utils
 * Updated: 2025-09-01T14:23:47 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.37.10'
};
