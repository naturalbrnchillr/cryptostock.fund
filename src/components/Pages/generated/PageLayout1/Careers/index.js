import React from 'react'

import Content from '../../../../Content'
import data from './data.json'

class Careers extends React.Component {
  render() {
    return (
      <>
        <div className="pl1-wrapper">
          <Content json={data} />
        </div>
      </>
    )
  }
}

export default Careers
