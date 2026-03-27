/**
 * Module: cli
 * Updated: 2026-03-27T12:00:57 (+0800)
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
  revision: '0.68.4'
};
