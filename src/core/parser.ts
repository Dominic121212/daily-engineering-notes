/**
 * Module: parser
 * Updated: 2025-12-09T09:57:43 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.51.4'
};
