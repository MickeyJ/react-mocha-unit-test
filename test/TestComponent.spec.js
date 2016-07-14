import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import TestComponent from '../src/TestComponent'

expect.extend(expectJSX)

describe('TestComponent', () =>{

  const renderer = TestUtils.createRenderer();
  
  it('should greet the person', () =>{
    
    renderer.render(<TestComponent person="Bob"/>)

    const actual = renderer.getRenderOutput();
    const expected = <h1>Hello Bob</h1>;

    expect(actual).toIncludeJSX(expected)
  })
  
});
