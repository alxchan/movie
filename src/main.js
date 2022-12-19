// import { createApp } from "vue";
// import App from "./App.vue";
// import "./style.css";
// import router from "./router/index.js";
// import { createPinia } from "pinia";

// const pinia = createPinia();
// createApp(App).use(router).use(pinia).mount("#app");

// pinia.use((context) => {
//   const storeId = context.store.$id;

//   const serializer = {
//     serialize: JSON.stringify,
//     deserialize: JSON.parse,
//   };
//   const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))
//   console.log(fromStorage);
//   if (fromStorage) {
//     context.store.$patch(fromStorage)
//   }

//   context.store.$subscribe((mutation, state) => {
//     window.localStorage.setItem(storeId, serializer.serialize(state));
//   });
// });



import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.js";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");

pinia.use((context) => {
  const storeId = context.store.$id;

  const serializer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };
  if (window.localStorage.getItem(storeId) && window.localStorage.getItem("shop")) {
    context.store.$patch(
      (context.store.login = serializer.deserialize(
        window.localStorage.getItem(storeId)
      )),
      (context.store.shop = serializer.deserialize(
        window.localStorage.getItem("shop"))
    )
    )
  }
  else if (window.localStorage.getItem("shop")){
      window.localStorage.setItem("shop",{})
  }

  else if (window.localStorage.getItem(storeId)){
    window.localStorage.setItem(storeId, "false")
  }

  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem("shop",serializer.serialize(state.shop))
    window.localStorage.setItem(storeId,serializer.serialize(state.login))
  });
});
