import * as React from 'react'
import { create } from 'react-test-renderer'

import { ChildComponent } from 'ChildComponent'
import { ParentComponent } from 'ParentComponent'
import { stubComponent } from 'test/utils'

describe('test the <ParentComponent/> component', () => {
  test('it should deep render the parent component', () => {
    const tree = create(<ParentComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('test the <ParentComponent/> component with stubbing', () => {
    stubComponent(ChildComponent)
    test('it should shallow render the parent component', () => {
      const tree = create(<ParentComponent />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  test('it should deep render the parent component again', () => {
    const tree = create(<ParentComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
