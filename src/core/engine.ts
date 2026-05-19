/**
 * Module: engine
 * Updated: 2026-05-19T10:37:40 (+0800)
 * Summary: simplify pipeline middleware composition
 */
export interface EngineOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_ENGINE_CONFIG: EngineOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.76.7'
};
