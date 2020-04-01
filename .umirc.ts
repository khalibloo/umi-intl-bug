import { defineConfig } from "umi";

export default defineConfig({
  locale: { default: "en-US" },
  routes: [{ path: "/", component: "@/pages/index" }],
});
