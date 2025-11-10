/**
 * Module: engine
 * Updated: 2025-11-10T14:23:46 (+0800)
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
  revision: '0.47.3'
};
