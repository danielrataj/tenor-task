<template>
  <div v-if="items.length" class="row q-col-gutter-sm q-ma-md">
    <div
      class="col-xs-6 col-sm-4 col-md-3"
      v-for="item in items"
      :key="item.id"
    >
      <q-card class="fit">
        <q-img
          :src="item.media_formats.gifpreview.url"
          :alt="item.title || item.content_description"
          fit="fit"
          style="max-height: 180px"
        >
          <div
            class="absolute-bottom text-subtitle2 text-center"
            v-if="item.title || item.content_description"
          >
            {{ item.title || item.content_description }}
          </div>
        </q-img>

        <q-card-section class="text-center">
          <q-card-section class="q-pt-none" v-if="item.tags.length">
            <q-chip
              v-for="tag in item.tags"
              :key="tag"
              size="sm"
              class="overflow-hidden-y"
              clickable
              @click="
                $router.push({ name: 'search', params: { keyword: tag } })
              "
              >{{ tag }}</q-chip
            >
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <p v-else>{{ $t("searching.xhr.nodata") }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TenorItems",
  props: {
    items: {
      required: true,
    },
  },
});
</script>
