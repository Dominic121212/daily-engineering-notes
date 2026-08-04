/**
 * Module: scheduler
 * Updated: 2026-08-04T16:39:05 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.89.1'
};
