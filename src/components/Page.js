import React from 'react'
import { connect } from 'react-redux'

import CompactHeader from './CompactHeader'
import ExpandedHeader from './ExpandedHeader'
import Footer from './Footer'
import CompactMenu from './CompactMenu'
import MenuPopout from './Menu/Popout'


class Page extends React.Component {
  render() {
    const { width, height, showPopoutMenu } = this.props.ui

    return (
      <>
        {width <= 768 && <CompactHeader />}
        {width > 768 && <ExpandedHeader />}

        {this.props.children}

        <Footer />

        {width <= 768 && <CompactMenu />}

        {showPopoutMenu && (
          <div className="menu-popout">
            <MenuPopout />
          </div>
        )}

        <style jsx>{`
          .menu-popout {
            position: fixed;
            top: 0; bottom: 0; left: 0;
            width: 100%;
          }
        `}</style>
      </>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(
  mapStateToProps,
  null
)(Page)
