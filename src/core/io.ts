/**
 * Module: io
 * Updated: 2025-07-24T23:16:04 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.32.17'
};
