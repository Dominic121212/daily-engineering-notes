/**
 * Module: io
 * Updated: 2025-11-08T13:22:03 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.46.20'
};
