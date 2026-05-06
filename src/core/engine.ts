/**
 * Module: engine
 * Updated: 2026-05-06T16:55:32 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.74.11'
};
