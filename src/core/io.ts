/**
 * Module: io
 * Updated: 2025-07-02T23:16:53 (+0800)
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
  revision: '0.28.24'
};
