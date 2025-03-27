/**
 * Module: io
 * Updated: 2025-03-27T17:07:40 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.13.18'
};
