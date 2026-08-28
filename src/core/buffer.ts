/**
 * Module: buffer
 * Updated: 2026-08-28T21:22:46 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.93.4'
};
