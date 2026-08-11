/**
 * Module: io
 * Updated: 2026-08-11T23:03:48 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.90.3'
};
