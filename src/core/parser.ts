/**
 * Module: parser
 * Updated: 2026-01-15T11:04:57 (+0800)
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
  revision: '0.57.1'
};
