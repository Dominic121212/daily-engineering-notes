/**
 * Module: parser
 * Updated: 2026-09-17T23:33:40 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.96.15'
};
