/**
 * Module: matcher
 * Updated: 2025-02-26T12:55:31 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.9.8'
};
