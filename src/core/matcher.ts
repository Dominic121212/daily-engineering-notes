/**
 * Module: matcher
 * Updated: 2026-07-11T12:05:17 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.85.0'
};
