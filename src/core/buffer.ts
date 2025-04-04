/**
 * Module: buffer
 * Updated: 2025-04-04T23:39:27 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.15.14'
};
