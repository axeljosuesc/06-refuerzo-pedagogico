/**
 * ============================================================================
 * 🥊 RETO 04 — Contenedor del Bar Salesiano (useState directo)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 *
 * 📖 MISIÓN:
 * Conectar el dominio (Reto 01) con los componentes (Retos 02 y 03) usando
 * `useState` directamente en la pantalla. NADA de custom hooks todavía: eso
 * llega en la Semana 09.
 *
 * 🛠️ INSTRUCCIONES:
 *  1. Implementa `incrementar`, `decrementar` y `reiniciar` reutilizando
 *     `calcularValor` del dominio (no sumes a mano).
 *  2. Usa `estadoUI` para deshabilitar los botones en los límites.
 *  3. INTEGRADOR: agrega 2 contadores más (Empanadas y Jugos) repitiendo el
 *     estado.
 *  4. Ejecuta en tu terminal: `pnpm run start:04`
 */

import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BotonContador } from '@/components/BotonContador';
import { ContadorDisplay } from '@/components/ContadorDisplay';
import { calcularValor, estadoUI, type ContadorConfig } from '@/domain/counter';

export default function Home() {
  // 🔎 ¿Por qué el estado arranca en 0? ¿Qué cambiaría si empezara en otro valor?
  const [valor, setValor] = useState(0);
  const [valorEmpanadas, setValorEmpanadas] = useState(0);
  const [valorJugos, setValorJugos] = useState(0);

  // 🔎 ¿Qué representa cada campo? ¿Por qué `valor` viene del estado y el resto son fijos?
  const config: ContadorConfig = { valor, paso: 1, minimo: 0, maximo: 10 };

  // 🔎 ¿Por qué calculamos `estado` y no lo guardamos en otro useState?
  const estado = estadoUI(valor, config);
  const configEmpanadas: ContadorConfig = { valor: valorEmpanadas, paso: 1, minimo: 0, maximo: 10 };
  const configJugos: ContadorConfig = { valor: valorJugos, paso: 1, minimo: 0, maximo: 10 };
  const estadoEmpanadas = estadoUI(valorEmpanadas, configEmpanadas);
  const estadoJugos = estadoUI(valorJugos, configJugos);

  // 👉 Antes de implementar, revisa el TSDoc de `calcularValor` (src/domain/counter.ts):
  //    ahí está el contrato; tú escribes el cómo.
  const incrementar = () => {
    setValor(calcularValor(config, 'incrementar'));
  };
  const decrementar = () => {
    setValor(calcularValor(config, 'decrementar'));
  };
  const reiniciar = () => {
    setValor(0);
  };

  const incrementarEmpanadas = () => {
    setValorEmpanadas(calcularValor(configEmpanadas, 'incrementar'));
  };
  const decrementarEmpanadas = () => {
    setValorEmpanadas(calcularValor(configEmpanadas, 'decrementar'));
  };
  const reiniciarEmpanadas = () => {
    setValorEmpanadas(0);
  };

  const incrementarJugos = () => {
    setValorJugos(calcularValor(configJugos, 'incrementar'));
  };
  const decrementarJugos = () => {
    setValorJugos(calcularValor(configJugos, 'decrementar'));
  };
  const reiniciarJugos = () => {
    setValorJugos(0);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bar Salesiano · Contadores</Text>

        {/* 📖 ¿Qué props acepta? Revisa el TSDoc de <ContadorDisplay> */}
        <ContadorDisplay valor={valor} etiqueta="Sanduches" />

        {/* 📖 Revisa el TSDoc de <BotonContador>: props, variantes y feedback */}
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementar}
            variante="primary"
            disabled={estado === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementar}
            variante="secondary"
            disabled={estado === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciar} variante="danger" />
        </View>

        <ContadorDisplay valor={valorEmpanadas} etiqueta="Empanadas" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarEmpanadas}
            variante="primary"
            disabled={estadoEmpanadas === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarEmpanadas}
            variante="secondary"
            disabled={estadoEmpanadas === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarEmpanadas} variante="danger" />
        </View>

        <ContadorDisplay valor={valorJugos} etiqueta="Jugos" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarJugos}
            variante="primary"
            disabled={estadoJugos === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarJugos}
            variante="secondary"
            disabled={estadoJugos === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarJugos} variante="danger" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6D6',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});