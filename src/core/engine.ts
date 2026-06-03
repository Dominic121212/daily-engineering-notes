/**
 * Module: engine
 * Updated: 2026-06-03T13:23:19 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.78.18'
};
