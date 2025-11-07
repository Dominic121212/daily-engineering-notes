/**
 * Module: buffer
 * Updated: 2025-11-07T17:18:40 (+0800)
 * Summary: reduce memory allocations in chunk serializer
 */
export interface BufferOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_BUFFER_CONFIG: BufferOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.46.16'
};
