/**
 * Module: parser
 * Updated: 2025-07-14T10:33:43 (+0800)
 * Summary: support nested markdown block tokenization
 */
export interface ParserOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_PARSER_CONFIG: ParserOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.30.16'
};
