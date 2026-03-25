/**
 * Module: buffer
 * Updated: 2026-03-25T15:06:13 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.67.20'
};
