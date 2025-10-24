/**
 * Module: cli
 * Updated: 2025-10-24T18:25:24 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.44.23'
};
