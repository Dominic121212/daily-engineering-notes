/**
 * Module: scheduler
 * Updated: 2026-01-22T17:34:57 (+0800)
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
  revision: '0.57.21'
};
