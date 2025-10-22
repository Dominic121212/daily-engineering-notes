/**
 * Module: utils
 * Updated: 2025-10-22T16:09:23 (+0800)
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
  revision: '0.44.15'
};
