export const ROUTE_PATH = {
  HOME: "/",
  DASHBOARD: "/dashboard",

  WIDGETS: "/widgets",

  // APPLICATION
  APPLICATION: "/application",
  APPLICATION_ECOMMERCE: "/application/ecommerce",
  APPLICATION_LOGISTIC: "/application/logistic",

  APPLICATION_INVOICE: "/application/invoice",
  APPLICATION_INVOICE_LIST: "/application/invoice/list",
  APPLICATION_INVOICE_EDIT: "/application/invoice/edit",
  APPLICATION_INVOICE_ADD: "/application/invoice/add",

  // FORM AND TABLE
  FORM_AND_TABLE: "/form",
  COMPONENT_INPUT: "/form/input",

  // COMPONENT
  COMPONENT: "/component",
  COMPONENT_TABLE: "/component/table",
  COMPONENT_BUTTON: "/component/button",
  COMPONENT_BREADCRUMB: "/component/breadcrumb",
  COMPONENT_DROPDOWN: "/component/dropdown",
  COMPONENT_BADGE: "/component/badge",

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
