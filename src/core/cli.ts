/**
 * Module: cli
 * Updated: 2026-03-05T12:04:22 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.64.12'
};
