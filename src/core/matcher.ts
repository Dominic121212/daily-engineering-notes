/**
 * Module: matcher
 * Updated: 2025-03-31T10:43:44 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.14.7'
};
