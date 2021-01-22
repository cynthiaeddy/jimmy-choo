import React from 'react';
import Navbar from '../components/navbars/navbar/Navbar';
import { create } from 'react-test-renderer'

describe('My first snapshot test',()=>{
    test('testing link button', () => {
    let tree = create(<Navbar />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
