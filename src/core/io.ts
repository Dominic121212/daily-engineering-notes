/**
 * Module: io
 * Updated: 2026-09-12T11:44:23 (+0800)
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
  revision: '0.95.10'
};
