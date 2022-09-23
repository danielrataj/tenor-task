<template>
  <q-page padding>
    <h1 class="text-h3 q-mt-sm q-mb-sm">{{ $t("trending.heading") }}</h1>
    <div v-if="data.length">
      <q-chip
        size="lg"
        clickable
        @click="$router.push({ name: 'search', params: { keyword: item } })"
        v-for="item in data"
        :key="item"
        >{{ item }}</q-chip
      >
    </div>
    <p v-else>{{ $t("trending.xhr.nodata") }}</p>

    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TrendingPage",
  async setup() {
    const $q = useQuasar();
    const i18n = useI18n();
    const data = ref([]);
    const loading = ref(false);

    try {
      loading.value = true;
      const response = await api.get(process.env.API_PATH_TRENDING);
      data.value = response.data.results;
    } catch (error) {
      console.error(error);
      $q.notify({
        message: i18n.t("trending.xhr.error"),
        color: "negative",
      });
    } finally {
      loading.value = false;
    }

    return {
      data,
      loading,
    };
  },
});
</script>
