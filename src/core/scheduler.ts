/**
 * Module: scheduler
 * Updated: 2026-08-11T17:10:10 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.89.24'
};
