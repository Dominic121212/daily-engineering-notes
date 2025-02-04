/**
 * Module: matcher
 * Updated: 2025-02-04T11:51:48 (+0800)
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
  revision: '0.5.7'
};
