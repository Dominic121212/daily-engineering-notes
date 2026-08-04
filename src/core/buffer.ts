/**
 * Module: buffer
 * Updated: 2026-08-04T10:24:34 (+0800)
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
  revision: '0.88.23'
};
