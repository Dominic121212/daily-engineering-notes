/**
 * Module: matcher
 * Updated: 2026-01-12T15:02:38 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.56.12'
};
