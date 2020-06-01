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
          '30. COSTILLAS BARBACOA',
          '31. SETA Y BAMBU SALTEADOS'
        ],
        SUSHI: [
          '32. MAKI DE SALMON (2 PIEZAS)',
          '33. MAKI DE PEPINO (2 PIEZAS)',
          '34. MAKI DE AGUACADE (2 PIEZAS)',
          '35. MAKI CRISRY (2 PIEZAS)',
          '36. SUSHI DE GAMBA (2 PIEZAS)',
          '37. SUSHI DE SALMON (2 PIEZAS)',
          '38. SUSHI DE MANTEQUILLA (2 PIEZAS)',
          '39. CALIFORNIA ROLL (3 PIEZAS)',
          '40. VEGETAL ROLL (3 PIEZAS)',
          '41. SASHIMI DE SALMON'
        ],
        DIMSUM: ['42. XIAO LONG BAO', '43. EMPANADILLAS CHINA'],
        PLANCHA: [
          '44. ENTRECOT A LA PLANCHA',
          '45. PECHUGA DE POLLO A LA PLANCHA',
          '46. BROCHETA DE POLLO',
          '47. BROCHETA DE CERDO',
          '48. NAVAJAS A LA PLANCHA',
          '49. ALMEJAS A LA PLANCHA',
          '50. PANGA A LA PLANCHA',
          '51. LENGUADINA A LA PLANCHA',
          '52. GAMBON A LA PLANCHA',
          '53. LANGOSTINOS A LA PLANCHA',
          '54. PECHOS A LA PLANCHA',
          '55. BROCHETA SEPIA A LA PLANCHA',
          '56. ESPARRAGOS A LA PLANCHA',
          '57. CHAMPIÑO A LA PLANCHA',
          '58. BERENJENA A LA PLANCHA',
          '59. PIMIENTO A LA PLANCHA',
          '60. CEBOLLA A LA PLANCHA',
          '61. CALABACIN A LA PLANCHA'
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
