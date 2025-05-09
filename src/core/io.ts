/**
 * Module: io
 * Updated: 2025-05-09T15:35:55 (+0800)
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
  revision: '0.20.3'
};
