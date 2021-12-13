import React from 'react'

import Logo from './Logo'

class CompactHeader extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="logo-wrapper">
            <Logo />
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            box-sizing: border-box;
            padding: 24px;
            background: #ffffff;
          }

          .logo-wrapper {
            display: block;
            margin: auto;
            width: 256px;
            max-width: 100%;
          }
        `}</style>
      </>
    )
  }
}

export default CompactHeader
