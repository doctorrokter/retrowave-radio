import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import VLayout from '../../../src/cascades/layouts/VLayout';
import VerticalDirection from '../../../src/cascades/const/VerticalDirection';
import VerticalAlignment from '../../../src/cascades/const/VerticalAlignment';

describe('VLayout', () => {
    it('should have vertical direction', () => {
        let layout = TestUtils.renderIntoDocument(<VLayout/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains('v-layout')).toBeTruthy();
        expect(componentDOM.classList.contains(VerticalDirection.TopToBottom)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout direction={VerticalDirection.TopToBottom}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalDirection.TopToBottom)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout direction={VerticalDirection.BottomToTop}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalDirection.BottomToTop)).toBeTruthy();
    });

    it('should have vertical alignment', () => {
        let layout = TestUtils.renderIntoDocument(<VLayout/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.Center)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout verticalAlignment={VerticalAlignment.Left}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.Left)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout verticalAlignment={VerticalAlignment.Center}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.Center)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout verticalAlignment={VerticalAlignment.Right}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.Right)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout verticalAlignment={VerticalAlignment.StretchWithSpace}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.StretchWithSpace)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<VLayout verticalAlignment={VerticalAlignment.Stretch}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(VerticalAlignment.Stretch)).toBeTruthy();
    });

    it('should not be visible', () => {
        let layout = TestUtils.renderIntoDocument(<VLayout visible={false}/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM).toBe(null);
    });
});