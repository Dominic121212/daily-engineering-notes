/**
 * Module: scheduler
 * Updated: 2026-04-01T22:46:40 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.68.22'
};
