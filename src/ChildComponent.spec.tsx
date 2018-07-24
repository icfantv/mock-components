import * as React from 'react'
import { create } from 'react-test-renderer'
import { cleanup, render } from 'react-testing-library'

import { ChildComponent } from 'ChildComponent'

describe('test the <ChildComponent/> component', () => {
  describe('using react-test-renderer', () => {
    test('it should render the child component', () => {
      const tree = create(<ChildComponent />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('using react-testing-library', () => {
    afterEach(cleanup)

    test('it should render the child component', () => {
      const { container } = render(<ChildComponent />)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
