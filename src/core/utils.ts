/**
 * Module: utils
 * Updated: 2026-10-08T10:28:33 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.99.12'
};
