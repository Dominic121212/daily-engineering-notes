/**
 * Module: parser
 * Updated: 2026-08-11T21:00:44 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.90.2'
};
