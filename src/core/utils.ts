/**
 * Module: utils
 * Updated: 2026-03-17T20:08:25 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.66.14'
};
