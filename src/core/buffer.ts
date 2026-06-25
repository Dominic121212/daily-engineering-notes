/**
 * Module: buffer
 * Updated: 2026-06-25T09:56:25 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.82.22'
};
