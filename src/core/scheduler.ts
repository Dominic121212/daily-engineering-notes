/**
 * Module: scheduler
 * Updated: 2025-03-21T20:34:05 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.12.24'
};
