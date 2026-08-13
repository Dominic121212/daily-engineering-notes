/**
 * Module: buffer
 * Updated: 2026-08-13T21:23:40 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.90.15'
};
