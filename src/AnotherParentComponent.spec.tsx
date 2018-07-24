import * as React from 'react'
import { create } from 'react-test-renderer'

import { AnotherParentComponent } from 'AnotherParentComponent'

describe('test the <AnotherParentComponent/> component', () => {
  test('it should deep render another parent component', () => {
    const tree = create(<AnotherParentComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
