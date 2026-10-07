/**
 * ============================================================================
 * 🥊 RETO 02 — ContadorDisplay (componente presentacional)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 *
 * 📖 MISIÓN:
 * Componente "dummy": NO tiene estado, NO usa hooks. Solo recibe datos por
 * props y los dibuja. Debe reutilizarse para los 3 contadores del Bar Salesiano.
 *
 * 🛠️ RETO (responde con código):
 *  1. El valor ya se muestra; ¿cómo mostrarías la etiqueta **solo cuando exista**?
 *  2. Ejecuta en tu terminal: `pnpm run start:02`
 */

import { StyleSheet, Text, View } from 'react-native';

/**
 * Props de `ContadorDisplay`.
 */
export interface ContadorDisplayProps {
  /** Número que se muestra (ya lo calculó el contenedor). */
  valor: number;
  /** Texto opcional que describe el contador. Si no viene, no se dibuja. */
  etiqueta?: string;
}

/**
 * Muestra el valor de un contador.
 *
 * @remarks
 * Componente **presentacional** ("dummy"): no tiene estado ni hooks; solo recibe
 * props y las dibuja. Por eso se reutiliza para todos los contadores.
 *
 * @param props - Ver la interfaz `ContadorDisplayProps`.
 */
export function ContadorDisplay({ valor, etiqueta }: ContadorDisplayProps) {
  return (
    <View style={styles.wrap}>
      {etiqueta ? <Text style={styles.etiqueta}>{etiqueta}</Text> : null}
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 3,
    borderColor: '#0A0A0A',
    borderRadius: 12,
    backgroundColor: '#FFFDF9',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  valor: {
    fontSize: 44,
    fontWeight: '900',
    color: '#0A0A0A',
  },
});