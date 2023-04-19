export { HelloPageProjector }

/**
 * PageProjectorType is responsible to project a PageModelType's content to the DOM.
 * A PageProjectorType binds itself to the DOM when the Page is activated.
 * A PageProjectorType observes the PageModelType via a PageControllerType.
 *
 * @typedef PageProjectorType
 */

/**
 * A constructor for a PageProjectorType.
 *
 * @constructor
 * @param { !PageControllerType } pageController - the pageController that controls the PageModelType we want to observe. Mandatory.
 * @param { !HTMLDivElement } pinToElement - the element in the DOM that we want to bind to append the pageContent. Mandatory.
 * @param { String } contentFilePath - the path to the static html content relative to index.html! Can be null.
 * @returns { PageProjectorType }
 * @example
 * const homePageController = PageController("home", null);
 * homePageController.setIcon('./navigation/icons/house.svg');
 * HomePageProjector(homePageController, pinToContentElement, './pages/home/home.html');
 */
const HelloPageProjector = (pageController, pinToElement, contentFilePath) => {
    const pageWrapper = pinToElement;
    const contentWrapper = document.createElement("div");
    const [wingController] = pageController.getDynamicContentControllers();

    const pageCSS = document.createElement('style');

    /**
     * A function that initializes the content and stores it in the pageWrapper.
     *
     * @function
     * @return { void }
     */
    const initialize = () => {
        const contentPromise = fetchPageContent(contentFilePath);
        contentPromise.then(contentHtml => {
            contentWrapper.innerHTML = contentHtml;

            if (pageWrapper.firstChild === null) {
                pageWrapper.append(contentWrapper);
            } else {
                pageWrapper.replaceChild(contentWrapper, pageWrapper.firstChild);
            }
        });

        const pageClass = pageController.getQualifier();

        const wingSpeed  = wingController.getWingSpeed();
        const wingSwings = wingController.getWingSwings();

        pageCSS.id = `${pageController.getQualifier()}-styles`;
        pageCSS.innerText += `
                .{pageClass} div.kolibri-logo-svg {
                    padding:        2em;
                    transition:     transform 0.4s linear;
                }
                .{pageClass} svg {
                    overflow: visible;
                }
                .{pageClass} .flatter {
                    animation-name:             kolibri-wings;
                    animation-duration:         ${wingSpeed}s;
                    animation-iteration-count:  ${wingSwings};
                    animation-direction:        reverse;
                    animation-timing-function:  ease-in;
                    transform-origin:           45% 45%;
                }
                @keyframes kolibri-wings {
                    from {
                        transform:      scaleX(1) rotate(0deg);
                    }
                    to {
                        transform:      scaleX(-1) rotate(30deg);
                    }
                }
        `;

        contentWrapper.classList.add(pageClass);
    };

    /**
     * A function that creates the DOM binding and initializes the page on first activation.
     *
     * @function
     * @return { void }
     */
    const projectPage = () => {
        // initialize content on first call
        if (contentWrapper.firstChild === null) {
            initialize();
        }
        // bind content to document
        if (pageWrapper.firstChild === null) {
            pageWrapper.append(contentWrapper);
        } else {
            pageWrapper.replaceChild(contentWrapper, pageWrapper.firstChild);
        }
    };

    /**
     * An async function that fetches the static page content from a given filePath and returns a promise with the string content.
     *
     * @param filePath - the filePath that belongs to the static page content
     * @return { Promise<String> }
     */
    const fetchPageContent = async (filePath) => {
        try {
            const response = await fetch(filePath, {
                    headers: {
                        'Content-Type': 'application/html',
                        'Accept': 'application/html'
                    }
                }
            );
            if (response.ok) {
                const content = await response.text();
                return content;
            } else {
                throw new Error(`HTTP error: ${response.status}`);
            }
        } catch (e) {
            console.error(e);
        }
    };

    pageController.onActiveChanged(active => {
        if (active) {
            document.querySelector('head').append(pageCSS);
            projectPage();
        } else {
            pageCSS.remove();
        }
    });


};

