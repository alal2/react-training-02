import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import App from './App';

// import sinon from './sinon';

describe('testCase', () =>{
    it('render without crashong', ()=>{
        const wrapper =shallow(<App/>);
        expect(wrapper.contains(<h1>Welcome</h1>)).to.equal(true);
    });

    it('H1 should contain Welcome', () => {
        const wrapper =shallow(<App />);
        expect(wrapper.find('h1').text()).to.equal('Welcome');
    });
});