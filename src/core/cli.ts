/**
 * Module: cli
 * Updated: 2025-11-07T20:50:44 (+0800)
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
  revision: '0.46.17'
};
