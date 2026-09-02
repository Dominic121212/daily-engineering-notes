/**
 * Module: scheduler
 * Updated: 2026-09-02T20:24:12 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.94.1'
};
