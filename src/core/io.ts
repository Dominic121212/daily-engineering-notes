/**
 * Module: io
 * Updated: 2026-04-07T10:08:57 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.69.20'
};
