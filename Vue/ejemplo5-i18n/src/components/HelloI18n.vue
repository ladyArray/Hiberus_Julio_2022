<template>
  <div>
    <CambiarIdioma />
    <p>{{ t('hola') }}</p>
    <p>{{ t('adios') }}</p>
    <h1>{{ $t('message')}}</h1>
  </div> 
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import CambiarIdioma from './CambiarIdioma.vue'

export default defineComponent({
  components: { CambiarIdioma },
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
  }
})
</script>

<i18n>
{
  "es": {
    "hola": "Hola, que tal?",
    "adios": "Hasta mañana"
  }
}
</i18n>
