/**
 * Module: cli
 * Updated: 2026-03-11T21:24:07 (+0800)
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
  revision: '0.65.12'
};
