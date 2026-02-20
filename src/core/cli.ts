/**
 * Module: cli
 * Updated: 2026-02-20T12:42:56 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.62.20'
};
