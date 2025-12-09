/**
 * Module: engine
 * Updated: 2025-12-09T21:00:15 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.51.12'
};
