import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",

    // colorPrimary: "",
    // colorSecondary: "",

    // UI
    appBg: "white",
    appContentBg: "white",
    appBorderColor: "",
    appBorderRadius: 4,

    // Typography
    fontBase: '"Arial", sans-serif',
    // fontCode: "",

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: "white",
    barSelectedColor: "rgba(255,255,255,0.9)",
    // barBg: "",

    brandTitle: "Project Storybook",
    brandUrl: "",
    brandImage: ""
  })
});
