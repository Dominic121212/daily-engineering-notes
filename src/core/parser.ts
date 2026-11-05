/**
 * Module: parser
 * Updated: 2026-11-05T15:05:40 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.103.4'
};
