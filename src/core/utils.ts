/**
 * Module: utils
 * Updated: 2025-09-10T19:03:00 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.38.11'
};
