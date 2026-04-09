/**
 * Module: buffer
 * Updated: 2026-04-09T20:52:32 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.70.6'
};
