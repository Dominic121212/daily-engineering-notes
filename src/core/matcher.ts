/**
 * Module: matcher
 * Updated: 2025-03-09T20:05:15 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.10.19'
};
