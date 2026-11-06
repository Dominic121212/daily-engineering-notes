/**
 * Module: scheduler
 * Updated: 2026-11-06T19:59:50 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.103.15'
};
