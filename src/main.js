import { createApp } from "vue";
import "./style.css";
import uiComponents from "./ui-components";
import App from "@/components/app/App.vue";
const app = createApp(App);
uiComponents.map((component) => app.component(component.name, component));
app.mount("#app");
