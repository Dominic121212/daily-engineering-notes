/**
 * Module: engine
 * Updated: 2026-09-09T11:06:43 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.94.20'
};
