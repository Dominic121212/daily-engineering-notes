/**
 * Module: parser
 * Updated: 2025-07-09T18:02:53 (+0800)
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
  revision: '0.30.3'
};
