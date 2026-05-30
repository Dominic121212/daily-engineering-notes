/**
 * Module: io
 * Updated: 2026-05-30T17:08:53 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.78.4'
};
