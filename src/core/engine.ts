/**
 * Module: engine
 * Updated: 2025-09-13T19:07:58 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.38.23'
};
