/**
 * Module: cli
 * Updated: 2026-10-07T23:13:17 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.99.11'
};
