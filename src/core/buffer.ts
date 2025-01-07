/**
 * Module: buffer
 * Updated: 2025-01-07T15:27:32 (+0800)
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
  revision: '0.1.4'
};
