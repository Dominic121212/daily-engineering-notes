/**
 * Module: io
 * Updated: 2025-11-21T18:42:21 (+0800)
 * Summary: ensure file descriptors close on stream error
 */
export interface IoOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_IO_CONFIG: IoOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.49.1'
};
