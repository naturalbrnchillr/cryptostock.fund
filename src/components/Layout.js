import React from 'react'
import { connect } from 'react-redux'

import { setDimensions } from '../redux/actions/ui'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  }

  render() {
    return <>{this.props.children}</>
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.props.setDimensions({ width, height })
  }
}

const mapDispatchToProps = dispatch => ({
  setDimensions: dimensions => dispatch(setDimensions(dimensions))
})

export default connect(
  null,
  mapDispatchToProps
)(Layout)
