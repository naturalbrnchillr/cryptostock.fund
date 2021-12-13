import React from 'react'
import { connect } from 'react-redux'

import { setShowPopoutMenu } from '../../redux/actions/ui'

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper" onClick={() => this.props.setShowPopoutMenu(true)}>
          <img src="/icons/menu-closed.png" />
        </div>

         <style jsx>{`
           .wrapper {
             width: 32px;
             height: 32px;
             cursor: pointer;
           }
        `}</style>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setShowPopoutMenu: show => dispatch(setShowPopoutMenu(show))
})

export default connect(
  null,
  mapDispatchToProps
)(Menu)
