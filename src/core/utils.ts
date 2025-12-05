/**
 * Module: utils
 * Updated: 2025-12-05T14:35:55 (+0800)
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
  revision: '0.50.18'
};
