import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import SidebarItem from "./components/SidebarItem.vue";
import SidebarItemAlt from "./components/SidebarItemAlt.vue";
import SectionTitle from "./components/SectionTitle.vue";

Vue.component("sidebar-item", SidebarItem);
Vue.component("sidebar-item-alt", SidebarItemAlt);
Vue.component("section-title", SectionTitle);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
