import React from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: undefined
    }

    this.parseJSON = this.parseJSON.bind(this)
  }

  componentDidMount() {
    const { json } = this.props

    const content = this.parseJSON(json)
    this.setState({ content })
  }

  render() {
    const { content } = this.state

    const { width } = this.props.ui

    return (
      <>
        {width > 768 && <div style={{ width: '100%', height: '181px' }}></div>}

        <div className="content">

          {content && content.map((element, index) => {
            const type = element[0]
            const cont = element[1]

            return (
              <>

                {type === 'heading' && (
                  <>
                    <div className="heading">{cont}</div>
                    <div style={{ width: '100%', height: '64px' }}></div>
                  </>
                )}

                {type === 'subheading' && (
                  <>
                    <div className="subheading">{cont}</div>
                  </>
                )}

                {type === 'text' && (
                  <>
                    <div className="text" dangerouslySetInnerHTML={{ __html: cont }} />
                  </>
                )}

                {type === 'image' && (
                  <>
                    <img className="image" src={cont} />
                  </>
                )}

              </>
            )
          })}

        </div>

        <style jsx>{`
          .content {
            box-sizing: border-box;
            width: 100%;
            max-width: 480px;
            margin: auto;
          }

          .heading {
            text-align: center;
            font-family: 'alegreya';
            font-size: 40px;
            font-weight: 400;
            font-style: italic;
            letter-spacing: 0.1em;
            line-height: 1.3em;
            color: #333;
            white-space: pre-wrap;
          }

          .subheading {
            text-align: center;
            font-family: 'Roboto Mono';
            font-size: 13px;
            font-weight: 500;
            letter-spacing: .13em;
            text-transform: uppercase;
            color: #bbb;
          }

          .text {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-family: 'alegreya';
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0em;
            line-height: 1.5em;
            color: #333;
          }

          .image {
            max-width: 100%;
            display: block;
            margin: auto;
          }
        `}</style>
      </>
    )
  }

  parseJSON(json) {
    const obj = []

    const keys = Object.keys(json)

    keys.forEach(key => {

      if (key.indexOf('h1-') !== -1) {
        obj.push([ 'heading', json[key] ])
      }

      if (key.indexOf('h3-') !== -1) {
        obj.push([ 'subheading', json[key] ])
      }

      if (key.indexOf('p-') !== -1) {
        obj.push([ 'text', json[key] ])
      }

      if (key.indexOf('img-') !== -1) {
        obj.push([ 'image', json[key] ])
      }

    })

    return obj
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})

export default connect(
  mapStateToProps,
  null
)(Content)
