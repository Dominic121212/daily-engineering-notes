/**
 * Module: matcher
 * Updated: 2026-10-11T18:30:16 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.100.4'
};
