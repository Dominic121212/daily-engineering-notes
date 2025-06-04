/**
 * Module: matcher
 * Updated: 2025-06-04T18:50:15 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.23.11'
};
