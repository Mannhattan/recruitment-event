/**
 * @jest-environment jsdom
*/

import React from 'react';
import Input from "./index";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });



describe('Input component', () => {
    it("Renders", () => {
        shallow(<Input
            label="testLabel"
            id="testId"
            type="text"
            onChange={() => { }}
            errorMessage="test error message"
            regexValidator={/^test$/}
        />);
    });

    it('Updates onChange event and validates input', () => {
        let updatedText = {};

        const component = shallow(
            <Input
                label="testLabel"
                id="testId"
                type="text"
                onChange={(newValue) => {
                    updatedText = newValue;
                }}
                errorMessage="test error message"
                regexValidator={/^.*$/}
            />
        );

        component.find('input').simulate('change', {
            target: { value: 'test title' }
        });

        expect(updatedText).toEqual("test title");
    });
});