import React from "react";

const Input = () => {
  return (
    <grid>
      <card className="col-span-12 p-4">
        <h5>Basic inputs</h5>
        <br />
        <grid>
          <div className="flex flex-col col-span-6">
            <label>BASIC INPUT</label>
            <input type="text" placeholder="Enter text" />
          </div>
          <div className="flex flex-col col-span-6">
            <label>DISABLED INPUT</label>
            <input type="text" placeholder="Disabled text" disabled />
          </div>
          <div className="flex flex-col col-span-6">
            <label>
              INPUT TEXT WITH HELP{" "}
              <span className="text-sm text-gray-600">
                eg.someone@example.com
              </span>
            </label>
            <input type="text" />
          </div>
          <div className="flex flex-col col-span-6">
            <label>READONLY INPUT</label>
            <input type="text" placeholder="You can't update me :P" readOnly />
          </div>
          <div className="flex flex-col col-span-6">
            <label>WITH HELPER TEXT</label>
            <input type="text" />
            <p className="text-sm text-gray-600">
              Find helper text here for given textbox.
            </p>
          </div>
        </grid>
      </card>

      <card className="col-span-12 p-4">
        <h5>Input Styles</h5>
        <br />
        <grid>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE PRIMARY INPUT</label>
            <input
              type="text"
              placeholder="outline primary"
              className="outline primary"
            />
          </div>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE SECONDARY INPUT</label>
            <input
              type="text"
              placeholder="outline secondary"
              className="outline secondary"
            />
          </div>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE SUCCESS INPUT</label>
            <input
              type="text"
              placeholder="outline success"
              className="outline success"
            />
          </div>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE INFO INPUT</label>
            <input
              type="text"
              placeholder="outline info"
              className="outline info"
            />
          </div>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE WARNING INPUT</label>
            <input
              type="text"
              placeholder="outline warning"
              className="outline warning"
            />
          </div>
          <div className="flex flex-col col-span-6">
            <label>OUTLINE DANGER INPUT</label>
            <input
              type="text"
              placeholder="outline danger"
              className="outline danger"
            />
          </div>
        </grid>
      </card>

      <card className="col-span-12 p-4">
        <h5>File Input</h5>
        <br />
        <grid>
          <div className="flex flex-col col-span-6">
            <label>SIMPLE FILE INPUT</label>
            <input type="file" />
          </div>
          <div className="flex flex-col col-span-6">
            <label>WITH BROWSE BUTTON</label>
            <label for="input-file" className="file flex flex-row">
              <input
                type="text"
                placeholder="Choose File"
                readOnly
                className="w-full"
              />
              <button className="w-24">BROWSE</button>
              <input id="input-file" type="file" />
            </label>
          </div>
        </grid>
      </card>

      <card className="col-span-12 p-4">
        <h5>Input with Icons</h5>
        <br />
        <grid>
          <div className="flex flex-col col-span-6">
            <label>LEFT ICON</label>
            <div className="left-icon w-full">
              <i class="fas fa-home text-indigo-500"></i>
              <input type="text" placeholder="Icon left" />
            </div>
          </div>
          <div className="flex flex-col col-span-6">
            <label>RIGTH ICON</label>
            <div className="right-icon w-full">
              <i class="fas fa-home text-indigo-500"></i>
              <input type="text" placeholder="Icon right" />
            </div>
          </div>
        </grid>
      </card>

      <card className="col-span-12 p-4">
        <h5>Input Validation States</h5>
        <br />
        <grid>
          <div className="flex flex-col col-span-6">
            <label>VALID STATE</label>
            <input type="text" placeholder="valid" className="valid" />
            <p className="text-sm text-green-500">
              This is valid state.
            </p>
          </div>
          <div className="flex flex-col col-span-6">
            <label>INVALID STATE</label>
            <input type="text" placeholder="invalid" className="invalid" />
            <p className="text-sm text-red-500">
              This is invalid state.
            </p>
          </div>
        </grid>
      </card>
    </grid>
  );
};

export default Input;
