import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';

const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe("App", () =>{
    it("renders without crashing",()=>{
        const wrapper = shallow(<App />);
    })
})
