/**
 * Module: cli
 * Updated: 2025-11-17T16:01:26 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.48.9'
};
