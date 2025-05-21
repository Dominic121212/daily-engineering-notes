/**
 * Module: io
 * Updated: 2025-05-21T20:54:25 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.21.12'
};
