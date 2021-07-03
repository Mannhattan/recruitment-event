/**
 * @jest-environment jsdom
*/

import React from 'react';
import Register from "./index";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('Registration page', () => {
    it("Renders", () => {
        mount(<Register />);
    });
});