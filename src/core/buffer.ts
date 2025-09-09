/**
 * Module: buffer
 * Updated: 2025-09-09T21:39:00 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.38.5'
};
