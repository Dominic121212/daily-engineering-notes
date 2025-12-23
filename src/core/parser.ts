/**
 * Module: parser
 * Updated: 2025-12-23T12:59:56 (+0800)
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
  revision: '0.53.2'
};
