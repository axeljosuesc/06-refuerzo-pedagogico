/**
 * ============================================================================
 * 🥊 RETO 03 — BotonContador (Pressable reutilizable)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 */

import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * Variantes visuales disponibles del botón.
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
  primary: { backgroundColor: '#f1390b' },
  secondary: { backgroundColor: '#38BDF8' },
  danger: { backgroundColor: '#57b915' },
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