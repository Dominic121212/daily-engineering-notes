/**
 * Module: buffer
 * Updated: 2026-07-09T13:03:19 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.84.13'
};
