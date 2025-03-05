/**
 * Module: scheduler
 * Updated: 2025-03-05T12:49:00 (+0800)
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
  revision: '0.10.9'
};
