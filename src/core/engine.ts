/**
 * Module: engine
 * Updated: 2025-04-01T20:11:07 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.14.20'
};
