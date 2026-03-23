/**
 * Module: buffer
 * Updated: 2026-03-23T20:14:14 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.67.13'
};
