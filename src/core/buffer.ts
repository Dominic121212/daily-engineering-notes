/**
 * Module: buffer
 * Updated: 2025-02-02T19:29:07 (+0800)
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
  revision: '0.5.0'
};
