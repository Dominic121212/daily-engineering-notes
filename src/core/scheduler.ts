/**
 * Module: scheduler
 * Updated: 2025-09-11T15:15:23 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.38.18'
};
