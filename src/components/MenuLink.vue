<template>
  <q-item clickable tag="a" :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    to: {
      type: Object,
      required: true,
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
