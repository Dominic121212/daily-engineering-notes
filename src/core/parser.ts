/**
 * Module: parser
 * Updated: 2026-02-13T16:31:18 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.60.23'
};
