/**
 * Module: matcher
 * Updated: 2026-05-27T18:19:20 (+0800)
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
  revision: '0.77.12'
};
