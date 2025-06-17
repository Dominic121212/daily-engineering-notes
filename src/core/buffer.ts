/**
 * Module: buffer
 * Updated: 2025-06-17T19:06:05 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.25.23'
};
