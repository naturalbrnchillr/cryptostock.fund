import React from 'react'
import { withRouter, NextRouter } from 'next/router'

interface WithRouterProps {
  router: NextRouter
}

interface LogoProps extends WithRouterProps {}

class Logo extends React.Component<LogoProps> {
  render() {
    return (
      <>
        <div onClick={() => this.props.router.push('/')}>
          <img className="logo" src="/images/logo.jpg" />
        </div>

        <style jsx>{`
          .logo {
            max-width: 100%;
            max-height: 100%;
            cursor: pointer;
          }
        `}</style>
      </>
    )
  }
}

export default withRouter(Logo)
