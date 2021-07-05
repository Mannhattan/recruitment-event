/**
 * @jest-environment jsdom
*/

import React from 'react';
import Register from "./index";
import { StoreProvider } from '../../components/Store';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('Registration page', () => {
    it("Renders", () => {
        mount(
            <StoreProvider>
                <Register />
            </StoreProvider>
        );
    });

    it("Validates fields and enables registration", () => {
        const component = mount(
            <StoreProvider>
                <Register />
            </StoreProvider>
        );

        component.find('input[name="firstName"]').simulate('change', {
            target: { value: 'name' }
        });
        component.find('input[name="lastName"]').simulate('change', {
            target: { value: 'surname' }
        });
        component.find('input[name="email"]').simulate('change', {
            target: { value: 'test@test.com' }
        });

        component.find('input[name="eventDate"]').simulate('click');

        component.find({ "aria-label": "July 13, 2021" }).simulate('click');

        //meaning that button is enabled
        expect(component.find("button.button-register").hasClass("disabled")).toEqual(false);
    });
});