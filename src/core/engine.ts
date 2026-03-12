/**
 * Module: engine
 * Updated: 2026-03-12T23:25:28 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.65.24'
};
