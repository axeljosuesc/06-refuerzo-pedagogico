/**
 * ============================================================================
 * 🥊 RETO 01 — Dominio del Contador (TypeScript puro)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 */

export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';

/**
 * 📌 RECUERDA — ¿qué es esto?
 * `ContadorConfig` es el "contrato" del contador: describe todo lo que un contador
 * necesita saber para funcionar.
 *
 *   valor  → el número actual (cambia cada vez que el usuario toca).
 *   paso   → cuánto sube o baja en cada toque.
 *   minimo → el piso: el contador no baja de aquí.
 *   maximo → el techo: el contador no sube de aquí.
 *
 * Se construye en la pantalla (`src/app/index.tsx`) y viaja hasta estas funciones.
 * `readonly` = una vez creado, no se reescribe.
 */
export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

/**
 * Calcula el siguiente valor del contador aplicando una dirección y el paso.
 *
 * @param config - Configuración actual del contador (`valor`, `paso`, `minimo`, `maximo`).
 * @param direccion - `'incrementar'` para subir, `'decrementar'` para bajar.
 * @returns El nuevo valor, **siempre** dentro de `[minimo, maximo]`.
 *
 * @example
 * // Subir 1 desde 5 (con maximo 10) → 6
 * calcularValor({ valor: 5, paso: 1, minimo: 0, maximo: 10 }, 'incrementar');
 */
export function calcularValor(config: ContadorConfig, direccion: Direccion): number {
  const candidato = direccion === 'incrementar'
    ? config.valor + config.paso
    : config.valor - config.paso;

  return Math.max(config.minimo, Math.min(config.maximo, candidato));
}

/**
 * Determina el estado de la interfaz según la posición del valor.
 *
 * @param valor - Número actual del contador.
 * @param config - Configuración del contador (usa `minimo` y `maximo`).
 * @returns `'MINIMO'` si el valor llegó al piso, `'MAXIMO'` si llegó al techo,
 *          `'IDLE'` en cualquier otro caso.
 */
export function estadoUI(valor: number, config: ContadorConfig): EstadoUI {
  if (valor <= config.minimo) return 'MINIMO';
  if (valor >= config.maximo) return 'MAXIMO';
  return 'IDLE';
}