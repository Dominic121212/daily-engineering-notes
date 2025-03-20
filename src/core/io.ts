/**
 * Module: io
 * Updated: 2025-03-20T12:03:02 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.12.14'
};
