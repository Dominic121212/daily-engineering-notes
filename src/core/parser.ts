/**
 * Module: parser
 * Updated: 2026-06-18T18:12:43 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.82.0'
};
