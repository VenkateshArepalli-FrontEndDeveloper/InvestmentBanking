import React from 'react';
import ReactDOM from 'react-dom';
import View from './src/screens/View';
import {shallow} from 'enzyme';

describe('The main app should render without exception', () => {
    it('the app should have view component', () => {
        const parentDiv = document.createElement('div');
        const viewWrapper  = shallow(<View />);
        ReactDOM.render(viewWrapper, parentDiv);
        ReactDOM.unmountComponentAtNode(parentDiv);
    })
})