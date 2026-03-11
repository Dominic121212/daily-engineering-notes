/**
 * Module: scheduler
 * Updated: 2026-03-11T20:28:13 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.65.10'
};
