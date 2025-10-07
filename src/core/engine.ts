/**
 * Module: engine
 * Updated: 2025-10-07T22:27:16 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.42.9'
};
