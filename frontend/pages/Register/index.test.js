import React from 'react';
import Register from "./index";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import 'jsdom-global/register';



describe('Registration page', () => {
    it("Renders", () => {
        shallow(<Register />);
    });
});