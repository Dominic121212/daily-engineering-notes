/**
 * Module: cli
 * Updated: 2025-02-20T21:51:43 (+0800)
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
  revision: '0.8.1'
};
