import React from "react";

const ComponentButton = (props) => {
  return (
    <React.Fragment>
      <grid>
        <card className="col-span-12 p-4">
          <h5>Basic Buttons</h5>
          <hr />
          <br />
          <h6>Default</h6>
          <p>
            Tailwind includes six predefined button styles, each serving its own
            semantic purpose.
          </p>
          <br />
          <button className="">Default</button>
          <button className="primary">Primary</button>
          <button className="secondary">Secondary</button>
          <button className="success">Success</button>
          <button className="info">Info</button>
          <button className="warning">Warning</button>
          <button className="danger">Danger</button>
          <br />
          <br />
          <h6>Rounded</h6>
          <p>
            Use a class <mark>.rounded-full</mark> with <mark>button</mark> tag
            to create round button.
          </p>
          <br />
          <button className="rounded-full primary">Primary</button>
          <button className="rounded-full secondary">Secondary</button>
          <button className="rounded-full success">Success</button>
          <button className="rounded-full info">Info</button>
          <button className="rounded-full warning">Warning</button>
          <button className="rounded-full danger">Danger</button>
        </card>
        <card className="col-span-12 p-4">
          <h5>Outline Buttons</h5>
          <hr />
          <br />
          <h6>Default</h6>
          <p>
            Use a class <mark>.outline</mark> to quickly create a outline
            button.
          </p>
          <br />
          <button className="outline primary">Primary</button>
          <button className="outline secondary">Secondary</button>
          <button className="outline success">Success</button>
          <button className="outline info">Info</button>
          <button className="outline warning">Warning</button>
          <button className="outline danger">Danger</button>
        </card>
        <card className="col-span-12 p-4">
          <h5>Shadow Buttons</h5>
          <hr />
          <br />
          <p>
            Use a class <mark>.hover:shadow-lg</mark> with button classes to
            create shadow button.
          </p>
          <br />
          <button className="hover:shadow-lg transition-full primary">
            Primary
          </button>
          <button className="hover:shadow-lg transition-full secondary">
            Secondary
          </button>
          <button className="hover:shadow-lg transition-full success">
            Success
          </button>
          <button className="hover:shadow-lg transition-full info">
            Info
          </button>
          <button className="hover:shadow-lg transition-full warning">
            Warning
          </button>
          <button className="hover:shadow-lg transition-full danger">
            Danger
          </button>
        </card>
        <card className="col-span-12 p-4">
          <h5>Buttons With Icon</h5>
          <hr />
          <br />
          <button className="outline primary">
            <i className="fas fa-home mr-2"></i>Home
          </button>
          <button className="warning">
            <i className="fas fa-star mr-2"></i>Star
          </button>
          <button className="success">
            <i className="fas fa-check mr-2"></i>Done
          </button>
          <button className="rounded-full danger">
            <i className="fas fa-heart mr-2"></i>Favorite
          </button>
        </card>
        <card className="col-span-12 p-4">
          <h5>Icon Only</h5>
          <hr />
          <br />
          <button className="px-3 rounded-full outline primary">
            <i className="fas fa-home"></i>
          </button>
          <button className="px-3 rounded-full warning">
            <i className="fas fa-star"></i>
          </button>
          <button className="px-3 success">
            <i className="fas fa-check"></i>
          </button>
          <button className="px-3 danger">
            <i className="fas fa-heart"></i>
          </button>
        </card>
      </grid>
    </React.Fragment>
  );
};

export default ComponentButton;
