/**
 * Module: matcher
 * Updated: 2026-05-18T16:58:34 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.76.3'
};
