const LIFECYCLE_METHODS = [
  'componentDidMount',
  'componentDidUpdate',
  'componentWillUnmount',
  'getDerivedStateFromProps',
  'render',
  'shouldComponentUpdate'
]

export function stubComponent(componentClass: any) {
  beforeEach(() => {
    LIFECYCLE_METHODS.forEach((hook: string) => {
      if (typeof componentClass.prototype[hook] !== 'undefined') {
        jest.spyOn(componentClass.prototype, hook).mockReturnValue(null)
      }
    })
  })
}
