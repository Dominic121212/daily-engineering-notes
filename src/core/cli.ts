/**
 * Module: cli
 * Updated: 2025-05-30T11:25:22 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.22.13'
};
