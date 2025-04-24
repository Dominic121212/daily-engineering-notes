/**
 * Module: parser
 * Updated: 2025-04-24T12:06:32 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.18.2'
};
