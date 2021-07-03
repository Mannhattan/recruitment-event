/**
 * @jest-environment jsdom
*/

import React from 'react';
import DatePicker from "./index";
import { StoreProvider } from '../../Store';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('DatePicker component', () => {
    it("Renders", () => {
        shallow(<DatePicker
            label="testLabel"
            id="testId"
            onChange={() => { }}
        />);
    });

    it('Updates onChange event', () => {
        let updatedText = {};

        const component = mount(
            <StoreProvider>
                <DatePicker
                    label="testLabel"
                    id="testId"
                    onChange={(newValue) => {
                        updatedText = newValue;
                    }}
                />
            </StoreProvider>
        );

        component.find('input').simulate('click');

        component.find({ "aria-label": "July 13, 2021" }).simulate('click');

        expect(updatedText).toEqual(new Date("2021-07-12T22:00:00.000Z"));
    });
});