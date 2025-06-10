/**
 * Module: engine
 * Updated: 2025-06-10T16:43:27 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.25.1'
};
