/**
 * Module: cli
 * Updated: 2025-07-02T18:19:23 (+0800)
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
  revision: '0.28.18'
};
