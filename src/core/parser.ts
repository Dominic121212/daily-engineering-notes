/**
 * Module: parser
 * Updated: 2025-09-15T19:29:07 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.39.1'
};
