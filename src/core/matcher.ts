/**
 * Module: matcher
 * Updated: 2025-09-09T21:30:58 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.38.4'
};
