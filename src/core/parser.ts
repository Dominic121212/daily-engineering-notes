/**
 * Module: parser
 * Updated: 2025-01-16T22:53:31 (+0800)
 * Summary: resolve edge case with escaped unicode sequences
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.3.4'
};
