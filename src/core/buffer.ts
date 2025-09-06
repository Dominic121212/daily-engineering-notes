/**
 * Module: buffer
 * Updated: 2025-09-06T19:11:00 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.38.0'
};
