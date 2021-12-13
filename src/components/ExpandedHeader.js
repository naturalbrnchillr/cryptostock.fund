import React from 'react'

import Menu from './Menu'
import Logo from './Logo'

class ExpandedHeader extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container">
            <div className="menu-icon-wrapper">
              <Menu />
            </div>
            <div className="logo-wrapper">
              <Logo />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            position: fixed;
            top: 0; right: 0; left: 0;
            background: #ffffff;
          }

          .container {
            box-sizing: border-box;
            max-width: 1028px;
            padding: 16px;
            margin: auto;
          }

          .menu-icon-wrapper {
            position: absolute;
            width: 32px;
            height: 32px;
            top: 50%;
            margin-top: -16px;
          }

          .logo-wrapper {
            display: block;
            margin: auto;
            width: 256px;
            font-size: 0;
          }
        `}</style>
      </>
    )
  }
}

export default ExpandedHeader
