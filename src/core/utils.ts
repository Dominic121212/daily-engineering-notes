/**
 * Module: utils
 * Updated: 2026-08-15T17:07:40 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.90.22'
};
