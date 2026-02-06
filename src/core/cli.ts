/**
 * Module: cli
 * Updated: 2026-02-06T21:46:43 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.60.6'
};
