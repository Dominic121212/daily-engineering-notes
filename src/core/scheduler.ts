/**
 * Module: scheduler
 * Updated: 2026-01-13T10:42:52 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.56.15'
};
