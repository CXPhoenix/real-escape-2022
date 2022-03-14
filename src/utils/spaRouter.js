import { reactive } from "vue";

export const routers = reactive({});

/**
 *
 * @param {Array} routes
 * @param {string} initPage include in routes or raise error
 * @returns {Object[]} the router methods
 */
export function createRouter(routes, initPage = routes[0]) {
  if (routes.indexOf(initPage) === -1) throw "No this init page";
  for (let i = 0; i < routes.length; i++) {
    const page = routes[i];
    routers[page] = false;
  }
  routers[initPage] = true;
  // window.history.pushState(JSON.stringify(routers), "");
  window.addEventListener("popstate", function (e) {
    if (!e.state) this.history.back();
    const states = JSON.parse(e.state);
    for (let page in states) {
      routers[page] = states[page];
    }
  });
  /**
   *
   * @param {string} page the page in routes
   */
  const pushState = (page) => {
    if (routes.indexOf(page) === -1) throw "No this page";
    if (!window.history.state)
      window.history.pushState(JSON.stringify(routers), "");
    for (let route in routers) {
      routers[route] = false;
    }
    routers[page] = true;
    window.history.pushState(JSON.stringify(routers), "");
  };

  /**
   *
   * @param {string} page the page in routes
   */
  const replaceState = (page) => {
    if (routes.indexOf(page) === -1) throw "No this page";
    if (!window.history.state)
      window.history.replaceState(JSON.stringify(routers), "");
    for (let route in routers) {
      routers[route] = false;
    }
    routers[page] = true;
    window.history.replaceState(JSON.stringify(routers), "");
  };
  return { pushState, replaceState };
}
