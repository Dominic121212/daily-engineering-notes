/**
 * Module: engine
 * Updated: 2025-08-17T16:40:57 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.35.14'
};
