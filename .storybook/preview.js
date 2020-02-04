import { configure, addDecorator, addParameters } from "@storybook/html";
import { withA11y } from "@storybook/addon-a11y";
import { withHTML } from "@whitespace/storybook-addon-html/html";

import "../src/scss/main.scss";

const customViewports = {
  iphone5: {
    name: "iPhone 5",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  galaxys8: {
    name: "Galaxy S8",
    styles: {
      height: "740px",
      width: "360px"
    },
    type: "mobile"
  },
  iphone8: {
    name: "iPhone 8",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  iphonex: {
    name: "iPhone X",
    styles: {
      height: "812px",
      width: "375px"
    },
    type: "mobile"
  },
  iphone8p: {
    name: "iPhone 8 Plus",
    styles: {
      height: "736px",
      width: "414px"
    },
    type: "mobile"
  },
  iphonexsmax: {
    name: "iPhone XS Max",
    styles: {
      height: "896px",
      width: "414px"
    },
    type: "mobile"
  },
  ipad: {
    name: "iPad",
    styles: {
      height: "1024px",
      width: "768px"
    },
    type: "tablet"
  },
  desktop: {
    name: "Desktop",
    styles: {
      height: "768px",
      width: "1366px"
    },
    type: "desktop"
  },
  desktopxl: {
    name: "Desktop (XL)",
    styles: {
      height: "1024px",
      width: "1920px"
    },
    type: "desktop"
  }
};

addDecorator(withHTML);
addDecorator(withA11y);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: "iphone8"
  },
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  backgrounds: [
    { name: "White", value: "#ffffff", default: true },
    { name: "Black", value: "#000000" }
  ],
});