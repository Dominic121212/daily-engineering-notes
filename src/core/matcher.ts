/**
 * Module: matcher
 * Updated: 2026-08-28T20:53:56 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.93.3'
};
