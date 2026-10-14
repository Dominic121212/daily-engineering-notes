/**
 * Module: parser
 * Updated: 2026-10-14T16:15:31 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.100.14'
};
