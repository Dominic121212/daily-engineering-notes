/**
 * Module: matcher
 * Updated: 2026-08-27T20:57:30 (+0800)
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
  revision: '0.92.23'
};
