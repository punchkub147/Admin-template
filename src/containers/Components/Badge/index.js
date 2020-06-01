import React from "react";

const ComponentBadge = (props) => {
  return (
    <React.Fragment>
      <grid>
        <card className="col-span-12 p-4">
          <h5>Badges</h5>
          <hr />
          <br />
          <h6>Basic Badges</h6>
          <br/>
          <badge className="primary">primary</badge>
          <badge className="secondary">secondary</badge>
          <badge className="success">success</badge>
          <badge className="info">info</badge>
          <badge className="warning">warning</badge>
          <badge className="danger">danger</badge>
        </card>
        <card className="col-span-12 p-4">
          <h6>Badges Light</h6>
          <br/>
          <badge className="light primary">primary</badge>
          <badge className="light secondary">secondary</badge>
          <badge className="light success">success</badge>
          <badge className="light info">info</badge>
          <badge className="light warning">warning</badge>
          <badge className="light danger">danger</badge>
        </card>
        <card className="col-span-12 p-4">
          <h6>Badges With Icons</h6>
          <br/>
          <badge className="primary"><i className="far fa-envelope" /> primary</badge>
          <badge className="secondary"><i className="far fa-envelope" /> secondary</badge>
          <badge className="success"><i className="far fa-envelope" /> success</badge>
          <badge className="info"><i className="far fa-envelope" /> info</badge>
          <badge className="warning"><i className="far fa-envelope" /> warning</badge>
          <badge className="danger"><i className="far fa-envelope" /> danger</badge>
        </card>
        <card className="col-span-12 p-4">
          <h6>Badges With Only Icons</h6>
          <br/>
          <badge className="p-2 primary"><i className="far fa-envelope" /></badge>
          <badge className="p-2 secondary"><i className="far fa-envelope" /></badge>
          <badge className="p-2 success"><i className="far fa-envelope" /></badge>
          <badge className="p-2 info"><i className="far fa-envelope" /></badge>
          <badge className="p-2 warning"><i className="far fa-envelope" /></badge>
          <badge className="p-2 danger"><i className="far fa-envelope" /></badge>
        </card>
      </grid>
    </React.Fragment>
  );
};

export default ComponentBadge;
