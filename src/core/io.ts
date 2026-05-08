/**
 * Module: io
 * Updated: 2026-05-08T10:58:03 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.74.18'
};
