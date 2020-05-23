import { ROUTE_PATH } from "./router";

export const NAVBAR_CONFIG = [
  {
    name: "Dashboard",
    path: ROUTE_PATH.DASHBOARD,
    icon: "fa-chart-line",
    nested: [
      {
        name: "Dashboard",
        path: ROUTE_PATH.DASHBOARD,
        icon: "fa-chart-line"
      }
    ]
  },
  {
    name: "Widgets",
    path: ROUTE_PATH.WIDGETS,
    icon: "fa-tools",
    nested: [
      {
        name: "Widgets",
        path: ROUTE_PATH.WIDGETS,
        icon: "fa-tools"
      }
    ]
  },
  {
    name: "Application",
    path: ROUTE_PATH.APPLICATION,
    icon: "fa-file",
    nested: [
      {
        name: "Ecommerce",
        path: ROUTE_PATH.APPLICATION_ECOMMERCE,
        icon: "fa-store-alt"
      },
      {
        name: "Logistic",
        path: ROUTE_PATH.APPLICATION_LOGISTIC,
        icon: "fa-shipping-fast"
      }
    ]
  },
  {
    name: "Application",
    path: ROUTE_PATH.FORM_AND_TABLE,
    icon: "fa-file",
    nested: [
      {
        name: "Inputs",
        path: ROUTE_PATH.COMPONENT_INPUT,
        icon: "fa-store-alt"
      }
    ]
  },
  {
    name: "Components",
    path: ROUTE_PATH.COMPONENT,
    icon: "fa-toolbox",
    nested: [
      {
        name: "Table",
        path: ROUTE_PATH.COMPONENT_TABLE,
        icon: "fa-table"
      },
      {
        name: "Buttons",
        path: ROUTE_PATH.COMPONENT_BUTTON,
        icon: "fa-arrow-right"
      },
      {
        name: "Breadcrumbs",
        path: ROUTE_PATH.COMPONENT_BREADCRUMB,
        icon: "fa-arrow-right"
      },
      {
        name: "Dropdowns",
        path: ROUTE_PATH.COMPONENT_DROPDOWN,
        icon: "fa-arrow-right"
      }
    ]
  },
  {
    name: "Authen",
    path: ROUTE_PATH.LOGIN,
    icon: "fa-key",
    nested: [
      {
        name: "Login",
        path: ROUTE_PATH.LOGIN,
        icon: "fa-sign-in-alt"
      },
      {
        name: "Register",
        path: ROUTE_PATH.REGISTER,
        icon: "fa-paste"
      },
      {
        name: "Forgot Password",
        path: ROUTE_PATH.FORGOT_PASSWORD,
        icon: "fa-envelope-open-text"
      },
      {
        name: "Logout",
        path: ROUTE_PATH.LOGOUT,
        icon: "fa-sign-out-alt"
      }
    ]
  }
];
