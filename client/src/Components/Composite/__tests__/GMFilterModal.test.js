import React from 'react';
import GMFilterModal from './../../Composite/GMFilterModal';
import ShallowRenderer from 'react-test-renderer/shallow';


it('gmf,ltermodal page renders correctly', () => {
//let store;
const renderer = new ShallowRenderer();
renderer.render(<GMFilterModal />);

});