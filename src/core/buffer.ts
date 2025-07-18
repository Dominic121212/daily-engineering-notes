/**
 * Module: buffer
 * Updated: 2025-07-18T21:09:41 (+0800)
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
  revision: '0.31.23'
};
