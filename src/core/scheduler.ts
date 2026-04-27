/**
 * Module: scheduler
 * Updated: 2026-04-27T22:39:02 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.73.12'
};
