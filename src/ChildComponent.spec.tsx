import * as React from 'react'
import { create } from 'react-test-renderer'
import { ChildComponent } from 'ChildComponent'

describe('test the <ChildComponent/> component', () => {
  test('it should render the child component', () => {
    const tree = create(<ChildComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
