/**
 * Module: matcher
 * Updated: 2026-07-23T13:33:15 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.87.4'
};
