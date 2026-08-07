/**
 * Module: scheduler
 * Updated: 2026-08-07T23:36:49 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.89.18'
};
