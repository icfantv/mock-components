import * as React from 'react'
import { BindAll } from 'lodash-decorators'
import { ChildComponent } from 'ChildComponent'

@BindAll()
export class ParentComponent extends React.Component {
  public render(): React.ReactElement<ParentComponent> {
    return (
      <div>
        <div>Parent Component</div>
        <div>
          <ChildComponent />
        </div>
      </div>
    )
  }
}
