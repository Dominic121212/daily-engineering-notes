/**
 * Module: utils
 * Updated: 2026-03-16T12:26:06 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.66.11'
};
