import buttonPrimary from "./button-primary.html";
import { useEffect } from "@storybook/client-api";

export default {
  title: "Project Design System/Atoms/Buttons"
};

export const ButtonPrimary = () => {
  useEffect(() => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.classList.toggle('red');
    })
  });
  return buttonPrimary;
};
