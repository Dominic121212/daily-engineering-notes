/**
 * Module: matcher
 * Updated: 2025-04-21T22:43:33 (+0800)
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
  revision: '0.17.14'
};
