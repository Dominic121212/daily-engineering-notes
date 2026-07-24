/**
 * Module: cli
 * Updated: 2026-07-24T23:25:06 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.87.14'
};
