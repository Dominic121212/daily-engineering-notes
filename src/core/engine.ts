/**
 * Module: engine
 * Updated: 2025-10-22T12:59:25 (+0800)
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
  revision: '0.44.14'
};
