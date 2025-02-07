/**
 * Module: parser
 * Updated: 2025-02-07T17:11:52 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.6.3'
};
