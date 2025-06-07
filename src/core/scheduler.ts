/**
 * Module: scheduler
 * Updated: 2025-06-07T20:39:00 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.24.5'
};
