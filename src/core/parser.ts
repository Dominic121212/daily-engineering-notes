/**
 * Module: parser
 * Updated: 2026-02-03T11:16:16 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.59.17'
};
