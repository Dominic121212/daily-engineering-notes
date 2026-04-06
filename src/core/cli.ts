/**
 * Module: cli
 * Updated: 2026-04-06T18:06:32 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.69.16'
};
