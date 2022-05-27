import {initHomePage as home} from './pages/home/index';
import {initInstructionPage as instructions} from './pages/instructions/index';
import {initTimerPage as timer} from './pages/chronometer/index';
import {initGamePage as game} from './pages/game/index';
import {initResultComponent as result} from './pages/result/index';
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
	return location.host.includes("github.io");
}
const ROUTES = [
  {
    path: /\/home/,
    component: home,
  },
  {
    path: /\/instructions/,
    component: instructions,
  },
  {
    path: /\/chronometer/,
    component: timer,
  },
  {
    path: /\/game/,
    component: game,
  },
  {
    path: /\/result/,
    component: result,
  }
];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    container.innerHTML = ``;
    ROUTES.find((routes) => {
      if (routes.path.test(route)) {
        const el = routes.component({ goTo: goTo });            
        container.appendChild(el);
      }
    });
  }

   if (isGithubPages() || location.pathname !== "/") {
    goTo("/home");
  } if (isGithubPages() || location.pathname == "/") {
		window.addEventListener("load", () => {
			goTo("/home");
		});
	}
}