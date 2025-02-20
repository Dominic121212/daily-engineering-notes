/**
 * Module: engine
 * Updated: 2025-02-20T20:27:46 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.8.0'
};
