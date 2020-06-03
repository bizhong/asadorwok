<template>
  <div class="home">
    <lbz-list v-for="(value, name) in MENU" :key="name" :subheader="name">
      <lbz-list-item v-for="(item, index) of value" :key="index">{{
        item
      }}</lbz-list-item>
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
          '1. ENSALADA DE ALGAS JAPONESA',
          '2. ENSALADA RUSA',
          '3. ENSALADA CHINA',
          '4. LANGOSTINOS COCIDO',
          '5. QUESO CON ACEITE OLIVAS',
          '6. JAMON',
          '7. PULPO CON ACEITUNAS',
          '8. ENSALADA MEJILLONES',
          '9. ACEITUNA SAPO ANCHUA',
          '10. SOPA GAZPACHO'
        ],
        FRITAS: [
          '11. PAN CHINO (2 PIEZAS)',
          '12. ROLLOS DE PRIMAVERA (2 PIEZAS)',
          '13. ALAS DE POLLO FRITAS (4 PIEZAS)',
          '14. NUGGETS DE POLLO FRITAS (3 PIEZAS)',
          '15. POLLO AL LIMON',
          '16. CORQUETAS FRITAS (3 PIEZAS)',
          '17. MUSLITO DE MAR FRITOS (3 PIEZAS)',
          '18. CHOPITOS FIRTOS',
          '19. PATATAS FRITAS',
          '20. VERTURA TEMPUNA FRITAS'
        ],
        SALTEADOS: [
          '21. ARROS FRITO TRES DELICIAS',
          '22. ARROS FRITO CON SOJA',
          '23. ARROS FRITO CON CURRY',
          '24. PAELLA',
          '25. TALLERINES FRITO CON VERDURAS',
          '26. FIDEOS DE ARROS CON VERDURAS',
          '27. POLLO CON ALMENDRAS',
          '28. TERNERA CON SALSA OSTRAS',
          '29. CERDO CON PICANTES',
          '30. CERDO AGRIDULCE',
          '31. COSTILLAS BARBACOA',
          '32. SETA Y BAMBU SALTEADOS'
        ],
        SUSHI: [
          '33. MAKI DE SALMON (2 PIEZAS)',
          '34. MAKI DE PEPINO (2 PIEZAS)',
          '35. MAKI DE AGUACADE (2 PIEZAS)',
          '36. MAKI CRISRY (2 PIEZAS)',
          '37. SUSHI DE GAMBA (2 PIEZAS)',
          '38. SUSHI DE SALMON (2 PIEZAS)',
          '39. SUSHI DE MANTEQUILLA (2 PIEZAS)',
          '40. CALIFORNIA ROLL (3 PIEZAS)',
          '41. VEGETAL ROLL (3 PIEZAS)',
          '42. SASHIMI DE SALMON'
        ],
        DIMSUM: ['43. XIAO LONG BAO', '44. EMPANADILLAS CHINA'],
        PLANCHA: [
          '45. ENTRECOT A LA PLANCHA',
          '46. PECHUGA DE POLLO A LA PLANCHA',
          '47. BROCHETA DE POLLO',
          '48. BROCHETA DE CERDO',
          '49. NAVAJAS A LA PLANCHA',
          '50. ALMEJAS A LA PLANCHA',
          '51. PANGA A LA PLANCHA',
          '52. LENGUADINA A LA PLANCHA',
          '53. GAMBON A LA PLANCHA',
          '54. LANGOSTINOS A LA PLANCHA',
          '55. PECHOS A LA PLANCHA',
          '56. BROCHETA SEPIA A LA PLANCHA',
          '57. ESPARRAGOS A LA PLANCHA',
          '58. CHAMPIÑO A LA PLANCHA',
          '59. BERENJENA A LA PLANCHA',
          '60. PIMIENTO A LA PLANCHA',
          '61. CEBOLLA A LA PLANCHA',
          '62. CALABACIN A LA PLANCHA'
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
