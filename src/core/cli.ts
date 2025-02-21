/**
 * Module: cli
 * Updated: 2025-02-21T11:43:33 (+0800)
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
  revision: '0.8.3'
};
