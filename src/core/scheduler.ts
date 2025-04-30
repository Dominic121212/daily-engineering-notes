/**
 * Module: scheduler
 * Updated: 2025-04-30T19:54:21 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.18.17'
};
