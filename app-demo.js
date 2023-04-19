import { PageController } from "./pages/pageController.js";
import { StaticPageProjector } from "./pages/StaticPageProjector.js";
import { NavigationController } from "./navigation/navigationController.js";
import { NavigationProjector } from "./navigation/final-prototypes/dashboard-refined/dashboardRefinedNavigationProjector.js";
// import { NavigationProjector } from "./navigation/final-prototypes/bubble-state/bubblestateNavigationProjector.js";
import {
    DEBUGMODE,
    FAVICON,
    HOMEPAGE,
    ICONPATH,
    LOGO,
    NAME,
    VALUE,
} from './kolibri/presentationModel.js';
import { HelloPageProjector } from "./pages/demo/HelloPageProjector.js";

const pinToContent = document.getElementById('content');

/************************************** INTRODUCTION  ******************************************/
const struct1 = PageController('introduction', null);
const slide1  = PageController('welcome', null);
const slide2  = PageController('whois', null);
const slide3  = PageController('overview', null);

StaticPageProjector(slide1, pinToContent, './pages/page1.html');
StaticPageProjector(slide2, pinToContent, './pages/page2.html');
StaticPageProjector(slide3, pinToContent, './pages/page3.html');

/************************************** AUSGANGSLAGE  ******************************************/
const struct2 = PageController('baseline', null);
const slide4  = PageController('overview-baseline', null);
const slide5  = PageController('baseline-content', null);

StaticPageProjector(slide4, pinToContent, './pages/page4.html');
StaticPageProjector(slide5, pinToContent, './pages/page5.html');

/************************************** FORSCHUNGSTEIL  ******************************************/
const struct3  = PageController('research', null);
const slide6   = PageController('overview-research', null);
const slide7   = PageController('content-research', null);
const slide8   = PageController('design-patterns', null);
const slide9   = PageController('modern-structures', null);
const slide10  = PageController('observables', null);
const slide11  = PageController('presentation-model', null);

StaticPageProjector(slide6, pinToContent, './pages/page6.html');
StaticPageProjector(slide7, pinToContent, './pages/page7.html');
StaticPageProjector(slide8, pinToContent, './pages/page8.html');
StaticPageProjector(slide9, pinToContent, './pages/page9.html');
StaticPageProjector(slide10, pinToContent, './pages/page10.html');
StaticPageProjector(slide11, pinToContent, './pages/page11.html');

/************************************** IMPLEMENTATIONSTEIL  ******************************************/
const struct4  = PageController('implementation', null);
const slide12  = PageController('overview-implementation', null);
const slide13  = PageController('content-implementation', null);
const slide14  = PageController('architecture', null);
const slide15  = PageController('lifecycle', null);
const slide16  = PageController('testing', null);
const slide17  = PageController('prototypes', null);

StaticPageProjector(slide12, pinToContent, './pages/page12.html');
StaticPageProjector(slide13, pinToContent, './pages/page13.html');
StaticPageProjector(slide14, pinToContent, './pages/page14.html');
StaticPageProjector(slide15, pinToContent, './pages/page15.html');
StaticPageProjector(slide16, pinToContent, './pages/page16.html');
StaticPageProjector(slide17, pinToContent, './pages/page17.html');

/************************************** DEMO ******************************************/
const struct5  = PageController('demo', null);
const slide18  = PageController('overview-demo', null);
const slide19  = PageController('demo-content', null);

StaticPageProjector(slide18, pinToContent, './pages/page18.html');
StaticPageProjector(slide19, pinToContent, './pages/page19.html');

/************************************** OUT OF SCOPE ******************************************/
const struct6  = PageController('out-of-scope', null);
const slide20  = PageController('overview-oos', null);
const slide21  = PageController('oos-content', null);

StaticPageProjector(slide20, pinToContent, './pages/page20.html');
StaticPageProjector(slide21, pinToContent, './pages/page21.html');

/************************************** REFLEKTION ******************************************/
const struct7  = PageController('reflection', null);
const slide22  = PageController('overview-reflection', null);
const slide23  = PageController('reflection-content', null);

StaticPageProjector(slide22, pinToContent, './pages/page22.html');
StaticPageProjector(slide23, pinToContent, './pages/page23.html');

/************************************** SCHLUSS ******************************************/
const struct8  = PageController('end', null);
const slide24  = PageController('overview-end', null);
const slide25  = PageController('qa', null);

StaticPageProjector(slide24, pinToContent, './pages/page24.html');
StaticPageProjector(slide25, pinToContent, './pages/page25.html');

/************************************** CONFIGURING THE STRUCTS  ******************************************/

struct1.setNavigational(false);
struct2.setNavigational(false);
struct3.setNavigational(false);
struct4.setNavigational(false);
struct5.setNavigational(false);
struct6.setNavigational(false);
struct7.setNavigational(false);
struct8.setNavigational(false);

/************************************** ICONING THE STRUCTS  ******************************************/
struct1.setIconPath('./pages/icons/graduation-cap.png');
struct2.setIconPath('./pages/icons/start.png');
struct3.setIconPath('./pages/icons/research.png');
struct4.setIconPath('./pages/icons/code.png');
struct5.setIconPath('./pages/icons/programming-language.png');
struct6.setIconPath('./pages/icons/scope.png');
struct7.setIconPath('./pages/icons/thinking.png');
struct8.setIconPath('./pages/icons/help.png');

/************************************** NAMING THE SLIDES  ******************************************/
// 1
slide1 .setValue('Willkommen');
slide2 .setValue('Wer sind wir');
slide3 .setValue('Inhalt');
// 2
slide4 .setValue('Inhalt - Ausgangslage');
slide5 .setValue('Ausgangslage');
// 3
slide6 .setValue('Inhalt - Forschungsteil');
slide7 .setValue('Themen - Forschungsteil');
slide8 .setValue('Design Patterns');
slide9 .setValue('Moderne Navigationsstrukturen');
slide10.setValue('Observables');
slide11.setValue('Presentation Model');
// 4
slide12.setValue('Inhalt - Implementationsteil');
slide13.setValue('Themen - Implementationsteil');
slide14.setValue('Architektur');
slide15.setValue('Lifecycle');
slide16.setValue('Testing');
slide17.setValue('Prototypen');
// 5
slide18.setValue('Inhalt - Demo');
slide19.setValue('Demo');
// 6
slide20.setValue('Inhalt - Out of Scope');
slide21.setValue('Out of Scope');
// 7
slide22.setValue('Inhalt - Reflektion');
slide23.setValue('Reflektion');
// 8
slide24.setValue('Inhalt - Ende');
slide25.setValue('Fragen und Anregungen');

/************************************** ICONING THE SLIDES  ******************************************/
// 1
slide1 .setIconPath('./pages/icons/graduation-cap.png');
slide2 .setIconPath('./pages/icons/user.png');
slide3 .setIconPath('./pages/icons/page.png');
// 2
slide4 .setIconPath('./pages/icons/page.png');
slide5 .setIconPath('./pages/icons/start.png');
// 3
slide6 .setIconPath('./pages/icons/page.png');
slide7 .setIconPath('./pages/icons/research.png');
slide8 .setIconPath('./pages/icons/pattern-lock.png');
slide9 .setIconPath('./pages/icons/distance.png');
slide10.setIconPath('./pages/icons/binoculars.png');
slide11.setIconPath('./pages/icons/presentation.png');
// 4
slide12.setIconPath('./pages/icons/page.png');
slide13.setIconPath('./pages/icons/code.png');
slide14.setIconPath('./pages/icons/blueprint.png');
slide15.setIconPath('./pages/icons/recycle.png');
slide16.setIconPath('./pages/icons/flask.png');
slide17.setIconPath('./pages/icons/dimensions.png');
// 5
slide18.setIconPath('./pages/icons/page.png');
slide19.setIconPath('./pages/icons/development.png');
// 6
slide20.setIconPath('./pages/icons/page.png');
slide21.setIconPath('./pages/icons/scope.png');
// 7
slide22.setIconPath('./pages/icons/page.png');
slide23.setIconPath('./pages/icons/thinking.png');
// 8
slide24.setIconPath('./pages/icons/page.png');
slide25.setIconPath('./pages/icons/question-mark.png');

/************************************** NAVIGATION  ******************************************/

const navigationController = NavigationController();
navigationController.setConfiguration(/** @type ModelConfigurationObject */{
    [NAME]: 'Kolibri',
    [LOGO]: './img/logo/logo-new-128.svg',
    [FAVICON]: './img/logo/logo-new-128.svg',
    [HOMEPAGE]: slide1,
    [DEBUGMODE]: false
});

NavigationProjector(navigationController, document.getElementById('nav'));

navigationController.addPageControllers(
    // 1
    struct1,
    slide1,
    slide2,
    slide3,
    // 2
    struct2,
    slide4,
    slide5,
    // 3
    struct3,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    // 4
    struct4,
    slide12,
    slide13,
    slide14,
    slide15,
    slide16,
    slide17,
    // 5
    struct5,
    slide18,
    slide19,
    // 6
    struct6,
    slide20,
    slide21,
    // 7
    struct7,
    slide22,
    slide23,
    // 8
    struct8,
    slide24,
    slide25,
);

/************************************** STRUCTURING THE SLIDES  ******************************************/

// 1
slide1 .setParent(struct1);
slide2 .setParent(struct1);
slide3 .setParent(struct1);
// 2
slide4 .setParent(struct2);
slide5 .setParent(struct2);
// 3
slide6 .setParent(struct3);
slide7 .setParent(struct3);
slide8 .setParent(struct3);
slide9 .setParent(struct3);
slide10.setParent(struct3);
slide11.setParent(struct3);
// 4
slide12.setParent(struct4);
slide13.setParent(struct4);
slide14.setParent(struct4);
slide15.setParent(struct4);
slide16.setParent(struct4);
slide17.setParent(struct4);
// 5
slide18.setParent(struct5);
slide19.setParent(struct5);
// 6
slide20.setParent(struct6);
slide21.setParent(struct6);
// 7
slide22.setParent(struct7);
slide23.setParent(struct7);
// 8
slide24.setParent(struct8);
slide25.setParent(struct8);


/************************************** DEMO  ******************************************/
const WingController = (wingSwings, wingSpeed) => {
    const newWingSpeed = 1 / wingSpeed;
    return {
        getWingSwings: () => wingSwings,
        getWingSpeed:  () => newWingSpeed
    }
};

// Creating the page
// const helloPage = PageController('hello', null);
const helloPage = PageController('hello', [WingController(20, 5)]);

// Adding the page to the navigation
navigationController.addPageController(helloPage);

// Configuring the page
helloPage.setValue('Hello Demo!');
helloPage.setIconPath('./pages/icons/add.png');
helloPage.setParent(struct5);

// Projecting the static page
// StaticPageProjector(helloPage, pinToContent, './pages/demo/hello.html');

// Projecting the Flying Kolibri Page
HelloPageProjector(helloPage, pinToContent, './pages/demo/hello.html');





