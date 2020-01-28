import React from "react";
import CountryFlag from "./CountryFlag";

import Enzyme, { shallow } from "enzyme";

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

describe("CountryFlag", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CountryFlag />);
  });
});
