export function setupBurgerMenu() {
    const burgerBtn = document.querySelector('.burger-btn');
    let burgerMenu = null;

    const createBurgerMenu = () => {
        const navList = document.querySelector('.nav-list');
        const clone = navList.cloneNode(true);

        const menuWrapper = document.createElement('nav');
        menuWrapper.classList.add('burger-menu');
        menuWrapper.appendChild(clone);
        document.body.appendChild(menuWrapper);
        return menuWrapper;
    };

    const openMenu = () => {
        burgerMenu = createBurgerMenu();
        burgerMenu.classList.add('open');
        burgerBtn.classList.add('open');
        document.body.classList.add('no-scroll');

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        window.addEventListener('scroll', handleScroll);
    }

    const closeMenu = () => {
        if (burgerMenu) {
            burgerMenu.remove();
            burgerMenu = null;
            burgerBtn.classList.remove('open');
            document.body.classList.remove('no-scroll');

            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    const handleClickOutside = (e) => {
        if (
            burgerMenu &&
            !burgerMenu.contains(e.target) &&
            !burgerBtn.contains(e.target)
        ) {
            closeMenu();
        }
    };

    const handleEscape = (e) => {
        if (e.key === 'Escape') closeMenu();
    };

    const handleScroll = () => {
        closeMenu();
    };

    burgerBtn.addEventListener('click', () => {
        if (burgerMenu) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && burgerMenu) {
            closeMenu();
        }
    });
};