import React from 'react'
import Header from './Header.js'
import Enzyme, { shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe("Header", () =>{
    it("renders without crashing",()=>{
        const wrapper = shallow(<Header />);
    })
})
