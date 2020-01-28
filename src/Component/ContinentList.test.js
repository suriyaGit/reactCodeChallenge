import React from "react";
import ContinentList from "./ContinentList";
import CountryFlag from "./CountryFlag";

import Enzyme, { shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe("ContinentList", () =>{
    it("renders without crashing",()=>{
        const wrapper = shallow(<ContinentList />);
    });
    it("renders without crashing",()=>{
      const wrapper = shallow(<CountryFlag />);
  })


exports [`ContinentList should render initial layout 1`]= `
Array[
    <div className="col-md-12 mt-5">
        <div className="col-md-4 float-left">
          <h4>Step 1</h4>
          <div>Select a continent</div>
          <div className="form-group">
            <input
              className="form-control"
              list="continentList"
              id="selectedContinentDiv"
              onChange={this.getCountryList}
            />
            <datalist id="continentList" onChange={this.getCountryList}>
              <option key="" value=""></option>
              {list}
            </datalist>
            {this.state.selectedContinent ? (
              <div className="mt-4">
                <p>You selected </p>
                <h4>{this.state.selectedContinent}</h4>{" "}
              </div>
            ) : null}
          </div>
        </div>
        {this.state.selectedContinent ? (
          <CountryFlag
            selectedContinent={this.state.selectedContinent}
            countrylist={countrylist}
          ></CountryFlag>
        ) : null}
      </div>
]
`
});