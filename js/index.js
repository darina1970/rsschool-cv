import { setupBurgerMenu } from "./burgerMenu.js";
import { animateOnScroll } from "./animateOnScroll.js";
import { startMatrixEffect } from "./startMatrixEffect.js";

document.addEventListener('DOMContentLoaded', () => {
    setupBurgerMenu();
    animateOnScroll();
    startMatrixEffect();

})