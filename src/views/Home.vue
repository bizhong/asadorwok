<template>
  <div class="home">
    <lbz-list v-for="(value, name) in MENU" :key="name" :subheader="name">
      <lbz-list-item v-for="(item, index) of value" :key="index"
        >{{ index + 1 }}. {{ item }}</lbz-list-item
      >
    </lbz-list>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    data: () => ({
      MENU: {
        ENTREMESES: [
          'ENSALADA DE ALGAS JAPONESA',
          'ENSALADA RUSA',
          'ENSALADA CHINA',
          'LANGOSTINOS COCIDO',
          'QUESO CON ACEITE OLIVAS',
          'JAMON',
          'PULPO CON ACEITUNAS',
          'ENSALADA MEJILLONES',
          'ACEITUNA SAPO ANCHUA',
          'SOPA GAZPACHO'
        ],
        FRITAS: [
          'PAN CHINO (2 PIEZAS)',
          'ROLLOS DE PRIMAVERA (2 PIEZAS)',
          'ALAS DE POLLO FRITAS (4 PIEZAS)',
          'NUGGETS DE POLLO FRITAS (3 PIEZAS)',
          'POLLO AL LIMON',
          'CORQUETAS FRITAS (3 PIEZAS)',
          'MUSLITO DE MAR FRITOS (3 PIEZAS)',
          'CHOPITOS FIRTOS',
          'PATATAS FRITAS',
          'VERTURA TEMPUNA FRITAS'
        ],
        SALTEADOS: [
          'ARROS FRITO TRES DELICIAS',
          'ARROS FRITO CON SOJA',
          'ARROS FRITO CON CURRY',
          'PAELLA',
          'TALLERINES FRITO CON VERDURAS',
          'FIDEOS DE ARROS CON VERDURAS',
          'POLLO CON ALMENDRAS',
          'TERNERA CON SALSA OSTRAS',
          'CERDO CON PICANTES',
          'COSTILLAS BARBACOA',
          'SETA Y BAMBU SALTEADOS'
        ],
        SUSHI: [
          'MAKI DE SALMON (2 PIEZAS)',
          'MAKI DE PEPINO (2 PIEZAS)',
          'MAKI DE AGUACADE (2 PIEZAS)',
          'MAKI CRISRY (2 PIEZAS)',
          'SUSHI DE GAMBA (2 PIEZAS)',
          'SUSHI DE SALMON (2 PIEZAS)',
          'SUSHI DE MANTEQUILLA (2 PIEZAS)',
          'CALIFORNIA ROLL (3 PIEZAS)',
          'VEGETAL ROLL (3 PIEZAS)',
          'SASHIMI DE SALMON'
        ],
        DIMSUM: ['XIAO LONG BAO', 'EMPANADILLAS CHINA'],
        PLANCHA: [
          'ENTRECOT A LA PLANCHA',
          'PECHUGA DE POLLO A LA PLANCHA',
          'BROCHETA DE POLLO',
          'BROCHETA DE CERDO',
          'NAVAJAS A LA PLANCHA',
          'ALMEJAS A LA PLANCHA',
          'PANGA A LA PLANCHA',
          'LENGUADINA A LA PLANCHA',
          'GAMBON A LA PLANCHA',
          'LANGOSTINOS A LA PLANCHA',
          'PECHOS A LA PLANCHA',
          'BROCHETA SEPIA A LA PLANCHA',
          'ESPARRAGOS A LA PLANCHA',
          'CHAMPIÑO A LA PLANCHA',
          'BERENJENA A LA PLANCHA',
          'PIMIENTO A LA PLANCHA',
          'CEBOLLA A LA PLANCHA',
          'CALABACIN A LA PLANCHA'
        ]
      }
    })
  })
</script>

<style lang="less">
  .home .lbz-list {
    padding-top: 0;
    padding-bottom: 0;

    &:last-child {
      padding-bottom: 34px;
    }

    &__subheader {
      background-color: var(--lbz-theme-outline-on-surface);
    }
  }
</style>
