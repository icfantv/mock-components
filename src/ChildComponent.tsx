import * as React from 'react'
import { BindAll } from 'lodash-decorators'

@BindAll()
export class ChildComponent extends React.Component {
  public render(): React.ReactElement<ChildComponent> {
    return <div>Child Component</div>
  }
}
