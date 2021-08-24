const constructTabContainers = document.querySelectorAll('.construct-accordion--container-outer');

const initConstructTabs = () => {
    constructTabContainers.forEach(tabContainer => {
        const tabInnerContainers = tabContainer.querySelectorAll('.construct-accordion--container-inner');
        tabInnerContainers.forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (e.target.tagName === 'H2') {
                    const tabState = e.target.parentElement.getAttribute('aria-expanded');

                    switch (tabState) {
                        case 'true':
                            e.target.parentElement.setAttribute('aria-expanded', 'false');
                            break;
                        default:
                            e.target.parentElement.setAttribute('aria-expanded', 'true')
                            return;
                    }

                }
            })
        });
    });
}

if (constructTabContainers) {
    initConstructTabs();
}