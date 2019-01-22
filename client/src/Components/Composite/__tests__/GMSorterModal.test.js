import React from 'react';
import GMSorterModal from './../../Composite/GMSorterModal';
import ShallowRenderer from 'react-test-renderer/shallow';


it('gmsortermodal page renders correctly', () => {
//let store;
const renderer = new ShallowRenderer();
renderer.render(<GMSorterModal />);

});