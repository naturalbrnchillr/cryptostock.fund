import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <img className="logo" src="/images/logo.jpg" />
        </div>

        <style jsx>{`
          .wrapper {
            background: #ffffff;
            position: fixed;
            top: 0; right: 0; left: 0;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
          }

          .logo {
            height: auto;
            max-height: 120px;
            display: block;
            margin: auto;
          }
        `}</style>
      </>
    )
  }
}

export default Header
