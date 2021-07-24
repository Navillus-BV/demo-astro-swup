import Swup from "swup";
import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupSlideTheme from "@swup/slide-theme";

const swup = new Swup({
  plugins: [new SwupA11yPlugin(), new SwupHeadPlugin(), new SwupSlideTheme()],
});
