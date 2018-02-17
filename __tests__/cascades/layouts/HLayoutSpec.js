import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import HLayout from '../../../src/cascades/layouts/HLayout';
import HorizontalDirection from '../../../src/cascades/const/HorizontalDirection';
import HorizontalAlignment from '../../../src/cascades/const/HorizontalAlignment';

describe('HLayout', () => {
    it('should have horizontal direction', () => {
        let layout = TestUtils.renderIntoDocument(<HLayout/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains('h-layout')).toBeTruthy();
        expect(componentDOM.classList.contains(HorizontalDirection.LeftToRight)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout direction={HorizontalDirection.LeftToRight}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalDirection.LeftToRight)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout direction={HorizontalDirection.RightToLeft}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalDirection.RightToLeft)).toBeTruthy();
    });

    it('should have horizontal alignment', () => {
        let layout = TestUtils.renderIntoDocument(<HLayout/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.Left)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout horizontalAlignment={HorizontalAlignment.Left}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.Left)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout horizontalAlignment={HorizontalAlignment.Center}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.Center)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout horizontalAlignment={HorizontalAlignment.Right}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.Right)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout horizontalAlignment={HorizontalAlignment.StretchWithSpace}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.StretchWithSpace)).toBeTruthy();

        layout = TestUtils.renderIntoDocument(<HLayout horizontalAlignment={HorizontalAlignment.Stretch}/>);
        componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM.classList.contains(HorizontalAlignment.Stretch)).toBeTruthy();
    });

    it('should not be visible', () => {
        let layout = TestUtils.renderIntoDocument(<HLayout visible={false}/>);
        let componentDOM = ReactDOM.findDOMNode(layout);
        expect(componentDOM).toBe(null);
    });
});