export const ROUTE_PATH = {
  HOME: "/",
  DASHBOARD: "/dashboard",

  WIDGETS: "/widgets",

  // APPLICATION
  APPLICATION: "/application",
  APPLICATION_ECOMMERCE: "/application/ecommerce",
  APPLICATION_LOGISTIC: "/application/logistic",

  // FORM AND TABLE
  FORM_AND_TABLE: "/form",
  COMPONENT_INPUT: "/form/input",

  // COMPONENT
  COMPONENT: "/component",
  COMPONENT_TABLE: "/component/table",
  COMPONENT_BUTTON: "/component/button",
  COMPONENT_BREADCRUMB: "/component/breadcrumb",
  COMPONENT_DROPDOWN: "/component/dropdown",

  // AUTHEN
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotPassword",
  RESET_PASSWORD: "/resetPassword",
  LOGOUT: "/logout"
};

export const ROUTE_NAME = Object.keys(ROUTE_PATH).reduce((result, name) => {
  result[name] = name;
  return result;
}, {});
// { HOME: 'HOME' }
