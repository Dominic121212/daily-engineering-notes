/**
 * Module: scheduler
 * Updated: 2025-02-25T21:32:14 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.9.4'
};
