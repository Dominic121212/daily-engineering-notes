/**
 * Module: cli
 * Updated: 2025-10-10T23:11:56 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.42.18'
};
