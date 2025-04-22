/**
 * Module: matcher
 * Updated: 2025-04-22T22:18:47 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.17.21'
};
