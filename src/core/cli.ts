/**
 * Module: cli
 * Updated: 2025-05-10T17:43:34 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.20.10'
};
