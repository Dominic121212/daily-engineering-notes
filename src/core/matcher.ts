/**
 * Module: matcher
 * Updated: 2026-08-11T15:09:12 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.89.23'
};
