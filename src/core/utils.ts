/**
 * Module: utils
 * Updated: 2025-02-12T17:56:12 (+0800)
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
  revision: '0.6.23'
};
