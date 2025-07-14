/**
 * Module: scheduler
 * Updated: 2025-07-14T22:41:20 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.30.18'
};
