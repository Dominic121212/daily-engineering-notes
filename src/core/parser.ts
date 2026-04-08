/**
 * Module: parser
 * Updated: 2026-04-08T11:37:00 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.70.1'
};
