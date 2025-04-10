/**
 * Module: cli
 * Updated: 2025-04-10T18:12:03 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.16.9'
};
