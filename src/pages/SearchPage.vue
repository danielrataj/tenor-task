<template>
  <q-page padding>
    <h1 class="text-h3 q-mt-sm q-mb-sm">{{ $t("searching.heading") }}</h1>

    <div class="q-mb-lg">
      <q-input
        bottom-slots
        v-model="store.searchFor"
        :label="$t('searching.form.input.label')"
        autofocus
        :debounce="debounceMs"
      >
        <template v-slot:prepend>
          <q-icon
            v-if="store.searchFor !== ''"
            name="close"
            @click="store.searchFor = ''"
            class="cursor-pointer"
          />
          <q-icon name="search" />
        </template>

        <template v-slot:hint> {{ $t("searching.form.input.hint") }} </template>
      </q-input>
    </div>

    <TenorItems :items="store.items" />

    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { api } from "boot/axios";
import { useI18n } from "vue-i18n";
import { useTenorState } from "stores/tenor";
import TenorItems from "components/TenorItems.vue";

export default defineComponent({
  name: "SearchPage",
  components: {
    TenorItems,
  },
  async setup() {
    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const loading = ref(false);
    const debounceMs = ref(200);
    const store = useTenorState();

    const searchData = async (val) => {
      // prevent empty requests
      if (!val) {
        return false;
      }

      try {
        loading.value = true;
        const response = await api.get(process.env.API_PATH_SEARCH, {
          params: {
            random: true,
            q: val,
          },
        });

        // store it as well
        store.set(response.data.results);
      } catch (error) {
        console.error(error);

        $q.notify({
          message: i18n.t("searching.xhr.error"),
          color: "negative",
        });
      } finally {
        loading.value = false;
      }
    };

    watch(
      () => {
        return store.searchFor;
      },
      (val) => {
        // prevent watch in case of undefined (routing out)
        if (typeof val === "undefined") {
          return false;
        }

        // reset currently loaded items if no keyword is needed
        if (!val) {
          store.clear();
        }

        // also modify the route
        router.replace({
          name: "search",
          params: { keyword: val },
        });
      },
      { immediate: true }
    );

    watch(
      () => route.params.keyword,
      (val) => {
        // make sure the input field is updated
        store.setSearchFor(val);

        searchData(val);
      },
      { immediate: true }
    );

    return {
      loading,
      debounceMs,
      store,
    };
  },
});
</script>
