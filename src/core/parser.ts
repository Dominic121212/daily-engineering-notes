/**
 * Module: parser
 * Updated: 2025-07-21T12:28:37 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.32.2'
};
