/**
 * Module: buffer
 * Updated: 2025-01-17T11:03:13 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.3.6'
};
