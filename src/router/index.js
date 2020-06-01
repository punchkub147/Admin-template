import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { nest } from "recompose";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";
import Widgets from "../containers/Widgets";
import Login from "../containers/Authen/Login";
import Register from "../containers/Authen/Register";
import ForgotPassword from "../containers/Authen/ForgotPassword";
import Logout from "../containers/Authen/Logout";
// import AccessControl from "../hoc/AccessControl";
import { ROUTE_PATH } from "../configs/router";
import Ecommerce from "../containers/Applications/Ecommerce";
import Logistic from "../containers/Applications/Logistic";

import Invoice from '../containers/Applications/Invoice/index'
import InvoiceList from '../containers/Applications/Invoice/List'
import InvoiceEdit from '../containers/Applications/Invoice/Edit'
import InvoiceAdd from '../containers/Applications/Invoice/Add'

import ComponentTable from "../containers/Components/Table";
import ComponentButton from "../containers/Components/Button";
import ComponentBreadcrumb from "../containers/Components/Breadcrumb";
import ComponentDropDown from "../containers/Components/Dropdown";
import ComponentBadge from "../containers/Components/Badge";

import FormAndTable from "../containers/FormAndTable";
import ComponentInput from "../containers/FormAndTable/Input";

const RouteLayout = nest(
  Layout,
  // AccessControl,
  Route
);
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <RouteLayout exact path={ROUTE_PATH.HOME} component={Dashboard} />
        <RouteLayout exact path={ROUTE_PATH.DASHBOARD} component={Dashboard} />

        {/* WIDGETS */}
        <RouteLayout exact path={ROUTE_PATH.WIDGETS} component={Widgets} />

        {/* APPLICATION */}
        <RouteLayout exact path={ROUTE_PATH.APPLICATION} component={Ecommerce} />
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_ECOMMERCE} component={Ecommerce} />
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_LOGISTIC} component={Logistic} />
        
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_INVOICE} component={Invoice} />
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_INVOICE_LIST} component={InvoiceList} />
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_INVOICE_EDIT} component={InvoiceEdit} />
        <RouteLayout exact path={ROUTE_PATH.APPLICATION_INVOICE_ADD} component={InvoiceAdd} />

        {/* FORM AND TABLE */}
        <RouteLayout exact path={ROUTE_PATH.FORM_AND_TABLE} component={FormAndTable} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_INPUT} component={ComponentInput} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_TABLE} component={ComponentTable} />

        {/* COMPONENT */}
        <RouteLayout exact path={ROUTE_PATH.COMPONENT} component={ComponentTable} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_BUTTON} component={ComponentButton} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_BREADCRUMB} component={ComponentBreadcrumb} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_DROPDOWN} component={ComponentDropDown} />
        <RouteLayout exact path={ROUTE_PATH.COMPONENT_BADGE} component={ComponentBadge} />

        <Route exact path={ROUTE_PATH.LOGIN} component={Login} />
        <Route exact path={ROUTE_PATH.REGISTER} component={Register} />
        <Route exact path={ROUTE_PATH.FORGOT_PASSWORD} component={ForgotPassword} />
        <Route exact path={ROUTE_PATH.LOGOUT} component={Logout} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
