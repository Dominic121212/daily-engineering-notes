/**
 * Module: engine
 * Updated: 2025-07-17T18:47:56 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.31.13'
};
