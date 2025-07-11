import { setupBurgerMenu } from "./burgerMenu.js";
import { animateOnScroll } from "./animateOnScroll.js";
import { startMatrixEffect } from "./startMatrixEffect.js";
import { initProjectCardLinks } from "./projectCardLinks.js";
import { initScrollToTop } from "./scrollToTop.js";

document.addEventListener('DOMContentLoaded', () => {
    setupBurgerMenu();
    animateOnScroll();
    startMatrixEffect();
    initProjectCardLinks();
    initScrollToTop();
})