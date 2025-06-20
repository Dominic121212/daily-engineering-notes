/**
 * Module: scheduler
 * Updated: 2025-06-20T15:51:50 (+0800)
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
  revision: '0.26.7'
};
