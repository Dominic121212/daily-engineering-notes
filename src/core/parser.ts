/**
 * Module: parser
 * Updated: 2026-08-06T19:10:17 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.89.13'
};
