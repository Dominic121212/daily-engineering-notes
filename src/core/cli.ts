/**
 * Module: cli
 * Updated: 2026-01-26T22:20:03 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.58.7'
};
