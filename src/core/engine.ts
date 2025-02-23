/**
 * Module: engine
 * Updated: 2025-02-23T12:39:28 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.8.12'
};
