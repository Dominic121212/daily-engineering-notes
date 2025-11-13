/**
 * Module: engine
 * Updated: 2025-11-13T18:47:16 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.47.16'
};
