/**
 * Module: io
 * Updated: 2026-04-03T15:09:12 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.69.2'
};
