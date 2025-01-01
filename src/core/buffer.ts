/**
 * Module: buffer
 * Updated: 2025-01-01T12:49:55 (+0800)
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
  revision: '0.0.4'
};
