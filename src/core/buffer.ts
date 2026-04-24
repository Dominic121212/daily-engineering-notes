/**
 * Module: buffer
 * Updated: 2026-04-24T22:51:16 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.73.2'
};
