/**
 * Module: scheduler
 * Updated: 2025-04-16T15:43:16 (+0800)
 * Summary: add exponential backoff retry queue
 */
export interface SchedulerOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_SCHEDULER_CONFIG: SchedulerOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.16.21'
};
