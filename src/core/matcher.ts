/**
 * Module: matcher
 * Updated: 2025-03-25T21:44:57 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.13.5'
};
