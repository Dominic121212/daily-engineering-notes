/**
 * Module: parser
 * Updated: 2025-01-21T11:25:44 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.3.21'
};
