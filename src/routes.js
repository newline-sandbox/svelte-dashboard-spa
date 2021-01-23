import DashboardLayout from "./layouts/DashboardLayout.svelte";
import Home from "./views/Home.svelte";
import Board from "./views/Board.svelte";
import Timeline from "./views/Timeline.svelte";
import Calendar from "./views/Calendar.svelte";
import Projects from "./views/Projects.svelte";
import ProjectInfo from "./views/ProjectInfo.svelte";
import Reports from "./views/Reports.svelte";
import Messages from "./views/Messages.svelte";

const prefix = "dashboard";

const dashboardRoutes = [
  { name: "home", path: `/${prefix}/home`, component: Home, label: "Home" },
  { name: "board", path: `/${prefix}/board`, component: Board, label: "Board" },
  {
    name: "timeline",
    path: `/${prefix}/timeline`,
    component: Timeline,
    label: "Timeline",
  },
  {
    name: "calendar",
    path: `/${prefix}/calendar`,
    component: Calendar,
    label: "Calendar",
  },
  {
    name: "projects",
    path: `/${prefix}/projects`,
    component: Projects,
    label: "Projects",
  },
  {
    name: "projects/:id",
    path: `/${prefix}/projects/:id`,
    component: ProjectInfo,
    label: "Project Info",
    hasParams: true,
    isExcludedFromNav: true,
  },
  {
    name: "reports",
    path: `/${prefix}/reports`,
    component: Reports,
    label: "Reports",
  },
  {
    name: "messages",
    path: `/${prefix}/messages`,
    component: Messages,
    label: "Messages",
  },
];

const routesMapping = dashboardRoutes.reduce(
  (mapping, route) => {
    if (!route.hasParams) {
      mapping.withoutParams[route.path] = route.label;
    } else {
      mapping.withParamsRegExps.push([
        new RegExp(
          `^${route.path.replace(
            /(\/)(:[a-zA-Z]+)(\/|$)/g,
            (_match, $1, _$2, $3) => `${$1}[a-zA-Z0-9_\-]+${$3}`
          )}$`,
          "i"
        ),
        route.label,
      ]);
    }

    return mapping;
  },
  { withParamsRegExps: [], withoutParams: {} }
);

const getRouteLabel = (path) =>
  routesMapping.withoutParams[path] ||
  (routesMapping.withParamsRegExps.find(([regExp]) => regExp.test(path)) ||
    [])[1] ||
  "";

const routes = [
  {
    name: "/",
    redirectTo: prefix,
  },
  {
    name: `/${prefix}`,
    layout: DashboardLayout,
    nestedRoutes: [
      { name: "index", redirectTo: dashboardRoutes[0].path.slice(1) },
      ...dashboardRoutes.map(({ name, component }) => ({ name, component })),
    ],
  },
];

export { routes, getRouteLabel, dashboardRoutes };
