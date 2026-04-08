/**
 * Module: cli
 * Updated: 2026-04-08T16:45:12 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.70.2'
};
