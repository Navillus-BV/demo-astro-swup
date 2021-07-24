import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";

const swup = new Swup({
  plugins: [new SwupHeadPlugin(), new SwupSlideTheme()],
});
