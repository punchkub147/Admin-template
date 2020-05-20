import React from "react";
import Select from "../../../components/Select";

const ComponentDropDown = (props) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-8">
        <card className="col-span-12 p-4">
          <h5>Dropdowns</h5>
          <hr />
          <br />
          <h6>Basic</h6>
          <br />

          <Select className="w-40 mr-4">
            <option>default</option>
            <option>default 2</option>
            <option>default 3</option>
          </Select>
          <Select className="w-40 mr-4 primary">
            <option>primary</option>
            <option>primary 2</option>
            <option>primary 3</option>
          </Select>
          <Select className="w-40 mr-4 secondary">
            <option>secondary</option>
            <option>secondary 2</option>
            <option>secondary 3</option>
          </Select>
          <Select className="w-40 mr-4 success">
            <option>success</option>
            <option>success 2</option>
            <option>success 3</option>
          </Select>
          <Select className="w-40 mr-4 info">
            <option>info</option>
            <option>info 2</option>
            <option>info 3</option>
          </Select>
          <Select className="w-40 mr-4 warning">
            <option>warning</option>
            <option>warning 2</option>
            <option>warning 3</option>
          </Select>
          <Select className="w-40 mr-4 danger">
            <option>danger</option>
            <option>danger 2</option>
            <option>danger 3</option>
          </Select>
        </card>
        <card className="col-span-12 p-4">
          <h6>Outline</h6>
          <br />

          <Select className="w-40 mr-4 outline">
            <option>default</option>
            <option>default 2</option>
            <option>default 3</option>
          </Select>
          <Select className="w-40 mr-4 outline primary">
            <option>primary</option>
            <option>primary 2</option>
            <option>primary 3</option>
          </Select>
          <Select className="w-40 mr-4 outline secondary">
            <option>secondary</option>
            <option>secondary 2</option>
            <option>secondary 3</option>
          </Select>
          <Select className="w-40 mr-4 outline success">
            <option>success</option>
            <option>success 2</option>
            <option>success 3</option>
          </Select>
          <Select className="w-40 mr-4 outline info">
            <option>info</option>
            <option>info 2</option>
            <option>info 3</option>
          </Select>
          <Select className="w-40 mr-4 outline warning">
            <option>warning</option>
            <option>warning 2</option>
            <option>warning 3</option>
          </Select>
          <Select className="w-40 mr-4 outline danger">
            <option>danger</option>
            <option>danger 2</option>
            <option>danger 3</option>
          </Select>
        </card>
        <card className="col-span-12 p-4">
          <h6>Rounded</h6>
          <br />

          <Select className="w-40 mr-4 outline rounded-full">
            <option>default</option>
            <option>default 2</option>
            <option>default 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full primary">
            <option>primary</option>
            <option>primary 2</option>
            <option>primary 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full secondary">
            <option>secondary</option>
            <option>secondary 2</option>
            <option>secondary 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full success">
            <option>success</option>
            <option>success 2</option>
            <option>success 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full info">
            <option>info</option>
            <option>info 2</option>
            <option>info 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full warning">
            <option>warning</option>
            <option>warning 2</option>
            <option>warning 3</option>
          </Select>
          <Select className="w-40 mr-4 outline rounded-full danger">
            <option>danger</option>
            <option>danger 2</option>
            <option>danger 3</option>
          </Select>
        </card>
      </div>
    </React.Fragment>
  );
};

export default ComponentDropDown;