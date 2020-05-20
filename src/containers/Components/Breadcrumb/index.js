import React from "react";

const ComponentBreadcrumb = (props) => {
  const { pathname } = window.location
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-8">
        <card className="col-span-12 p-4">
          <h4>Breadcrumbs</h4>
          <hr />
          <br />
          <h6>Default</h6>
         
          <nav className="breadcrumb">
            <ol>
              <li><a href="/"><i class="fas fa-home text-indigo-500"></i></a></li>
              <li><a href="#">components</a></li>
              <li><a href="#">breadcrumb</a></li>
              <li>this page</li>
            </ol>
          </nav>

          <br />
          <h6>Auto breadcrumbs</h6>
          <p>
            Auto generate breadcrumbs by location
          </p>
          <br />
         
          <nav className="breadcrumb">
            <ol>
              <li><a href="/"><i class="fas fa-home text-indigo-500"></i></a></li>
              <li><a href={pathname}>{pathname.replace('/', '')}</a></li>
            </ol>
          </nav>

        </card>
      </div>
    </React.Fragment>
  );
};

export default ComponentBreadcrumb;
