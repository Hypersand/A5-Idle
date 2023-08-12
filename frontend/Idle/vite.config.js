import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      images: path.resolve(__dirname, "/src/assets/images"),
      outsideColor: path.resolve(__dirname, "/src/assets/images/outsideColor"),
      fonts: path.resolve(__dirname, "/src/fonts"),
      billmain: path.resolve(__dirname, "/src/components/billmain"),
      carNameDropdown: path.resolve(__dirname, "/src/components/carNameDropdown"),
      colorSelection: path.resolve(__dirname, "/src/components/colorSelection"),
      boxs: path.resolve(__dirname, "/src/components/common/boxs"),
      buttons: path.resolve(__dirname, "/src/components/common/buttons"),
      content: path.resolve(__dirname, "/src/components/common/content"),
      logos: path.resolve(__dirname, "/src/components/common/logos"),
      modals: path.resolve(__dirname, "/src/components/common/modals"),
      tabs: path.resolve(__dirname, "/src/components/common/tabs"),
      toolTips: path.resolve(__dirname, "/src/components/common/toolTips"),
      defaultOption: path.resolve(__dirname, "/src/components/defaultOption"),
      findTrim: path.resolve(__dirname, "/src/components/findTrim"),
      layout: path.resolve(__dirname, "/src/components/layout"),
      navbar: path.resolve(__dirname, "/src/components/navbar"),
      optionMain: path.resolve(__dirname, "/src/components/optionMain"),
      trimBoxContainer: path.resolve(__dirname, "/src/components/trimBoxContainer"),
      trimDetailModal: path.resolve(__dirname, "/src/components/trimDetailModal"),
      pages: path.resolve(__dirname, "/src/pages"),
      utils: path.resolve(__dirname, "/src/utils"),
      styles: path.resolve(__dirname, "/src/styles"),
      billMain: path.resolve(__dirname, "/src/components/BillMain"),
    },
  },
});
