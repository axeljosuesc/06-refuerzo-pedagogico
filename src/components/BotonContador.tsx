/**
 * ============================================================================
 * 🥊 RETO 03 — BotonContador (Pressable reutilizable)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 *
 * 📖 MISIÓN:
 * Botón reutilizable con props tipadas, variantes de color y feedback táctil.
 *
 * 🎨 Paleta UETS (referencia): primary #FDE047 · secondary #38BDF8 · danger #F43F5E
 *
 * 🛠️ RETO (responde con código):
 *  1. ¿Dónde se aplica la variante recibida por props dentro del estilo del botón?
 *  2. ¿Qué propiedad de estilo le falta a cada variante para verse con su color?
 *  3. Ejecuta en tu terminal: `pnpm run start:03`
 */

import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * Variantes visuales disponibles del botón.
 *
 * @remarks
 * `primary` = acción principal · `secondary` = acción alterna · `danger` = acción destructiva.
 */
export type BotonVariante = 'primary' | 'danger' | 'secondary';

/**
 * Props de `BotonContador`.
 */
export interface BotonContadorProps {
  /** Texto que muestra el botón. */
  label: string;
  /** Se ejecuta cuando el usuario toca el botón. */
  onPress: () => void;
  /** Variante de color (ver `BotonVariante`). Por defecto: `'primary'`. */
  variante?: BotonVariante;
  /** Si es `true`, el botón no responde al toque y se ve atenuado. */
  disabled?: boolean;
}

/**
 * Botón táctil reutilizable con variantes y retroalimentación al toque.
 *
 * @remarks
 * Usa `Pressable` y reacciona al estado `pressed` para dar feedback visual.
 *
 * @param props - Ver la interfaz `BotonContadorProps`.
 */
export function BotonContador({
  label,
  onPress,
  variante = 'primary',
  disabled = false,
}: BotonContadorProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variante],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0A0A0A',
    alignItems: 'center',
  },
  primary: { backgroundColor: '#FDE047' },
  secondary: { backgroundColor: '#38BDF8' },
  danger: { backgroundColor: '#F43F5E' },
  label: {
    fontWeight: '800',
    fontSize: 16,
    color: '#0A0A0A',
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  disabled: {
    opacity: 0.4,
  },
});