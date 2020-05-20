export const ROUTE_PATH = {
  HOME: "/",
  DASHBOARD: "/dashboard",

  WIDGETS: "/widgets",

  // APPLICATION
  ECOMMERCE: "/application/ecommerce",
  LOGISTIC: "/application/logistic",

  // COMPONENT
  COMPONENT_TABLE: "/component_table",
  COMPONENT_BUTTON: "/component_button",
  COMPONENT_BREADCRUMB: "/component_breadcrumb",
  COMPONENT_DROPDOWN: "/component_dropdown",

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
