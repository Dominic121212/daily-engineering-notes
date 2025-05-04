/**
 * Module: cli
 * Updated: 2025-05-04T20:12:55 (+0800)
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
  revision: '0.19.11'
};
