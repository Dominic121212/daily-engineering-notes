/**
 * Module: utils
 * Updated: 2026-01-10T12:10:55 (+0800)
 * Summary: replace legacy callback wrapper with async generator
 */
export interface UtilsOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_UTILS_CONFIG: UtilsOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.56.8'
};
