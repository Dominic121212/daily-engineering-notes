/**
 * Module: parser
 * Updated: 2025-11-25T15:00:42 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.49.13'
};
