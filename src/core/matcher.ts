/**
 * Module: matcher
 * Updated: 2026-04-12T12:06:58 (+0800)
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
  revision: '0.70.20'
};
