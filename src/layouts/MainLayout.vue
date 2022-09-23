<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          :aria-label="$t('menu.aria')"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Tenor Task </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <MenuLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div class="text-center">
        <q-img src="~/assets/logo.png" style="width: 100px; height: 100px" />
      </div>
    </q-drawer>

    <q-page-container>
      <Suspense>
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuLink from "src/components/MenuLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    MenuLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const linksList = ref([
      {
        title: "menu.home",
        icon: "home",
        to: {
          name: "home",
        },
      },
      {
        title: "menu.trending",
        icon: "trending_up",
        to: {
          name: "trending",
        },
      },
      {
        title: "menu.search",
        icon: "search",
        to: {
          name: "search",
        },
      },
    ]);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      linksList,
    };
  },
});
</script>
