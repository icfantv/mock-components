import * as React from 'react'
import { BindAll } from 'lodash-decorators'
import { ChildComponent } from 'ChildComponent'

@BindAll()
export class AnotherParentComponent extends React.Component {
  public render(): React.ReactElement<AnotherParentComponent> {
    return (
      <div>
        <div>Another Parent Component</div>
        <div>
          <ChildComponent />
        </div>
      </div>
    )
  }
}
