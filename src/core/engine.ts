/**
 * Module: engine
 * Updated: 2025-12-19T11:11:51 (+0800)
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
  revision: '0.52.20'
};
