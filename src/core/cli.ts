/**
 * Module: cli
 * Updated: 2025-08-12T12:53:49 (+0800)
 * Summary: support interactive progress reporting
 */
export interface CliOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CLI_CONFIG: CliOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.35.0'
};
