/**
 * Module: utils
 * Updated: 2025-12-22T18:35:04 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.53.1'
};
