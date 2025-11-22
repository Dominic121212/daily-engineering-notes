/**
 * Module: scheduler
 * Updated: 2025-11-22T20:31:52 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.49.4'
};
