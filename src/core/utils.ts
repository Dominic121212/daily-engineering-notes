/**
 * Module: utils
 * Updated: 2025-06-25T18:46:03 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.27.4'
};
