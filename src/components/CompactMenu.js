import React from 'react'

import Menu from './Menu'

class CompactMenu extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="menu-icon-wrapper">
            <Menu />
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            position: fixed;
            right: 0; bottom: 0; left: 0;
            padding: 12px 0 12px 0;
            background: #ffffff;
          }

          .menu-icon-wrapper {
            display: block;
            margin: auto;
            width: 32px;
            height: 32px;
          }
        `}</style>
      </>
    )
  }
}

export default CompactMenu
