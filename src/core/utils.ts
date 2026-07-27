/**
 * Module: utils
 * Updated: 2026-07-27T22:32:43 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.87.23'
};
