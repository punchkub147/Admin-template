import React from "react";
import Breadcrumb from "../../../components/Breadbrumb";

const ComponentBreadcrumb = (props) => {
  const { pathname } = window.location
  return (
    <React.Fragment>
      <grid>
        <card className="col-span-12 p-4">
          <h5>Breadcrumbs</h5>
          <hr />
          <br />
          <h6>Default</h6>
         
          <nav className="breadcrumb">
            <ol>
              <li><a href="/"><i class="fas fa-home text-indigo-500"></i></a></li>
              <li><a href="#">components</a></li>
              <li><a href="#">breadcrumb</a></li>
              <li>current page</li>
            </ol>
          </nav>

          <br />
          <h6>Auto breadcrumbs</h6>
          <p>
            Auto generate breadcrumbs by location
          </p>
          <br />
          
          <Breadcrumb/>

        </card>
      </grid>
    </React.Fragment>
  );
};

export default ComponentBreadcrumb;
