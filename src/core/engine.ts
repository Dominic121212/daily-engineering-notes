/**
 * Module: engine
 * Updated: 2025-09-18T18:52:04 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.39.22'
};
