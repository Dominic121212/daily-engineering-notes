/**
 * Module: engine
 * Updated: 2026-10-05T20:11:58 (+0800)
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
  revision: '0.98.16'
};
