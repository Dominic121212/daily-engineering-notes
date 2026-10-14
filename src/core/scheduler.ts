/**
 * Module: scheduler
 * Updated: 2026-10-14T22:58:53 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.100.18'
};
