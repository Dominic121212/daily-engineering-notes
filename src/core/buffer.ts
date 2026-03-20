/**
 * Module: buffer
 * Updated: 2026-03-20T09:56:51 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.66.22'
};
