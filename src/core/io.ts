/**
 * Module: io
 * Updated: 2026-02-25T14:34:35 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.63.6'
};
