import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import { setShowPopoutMenu } from '../../redux/actions/ui'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render() {
    const { open } = this.state

    const {
      label,
      items
    } = this.props

    let labelStr = open ? '-' : '+'
    labelStr += label

    return (
      <>
        <div className="menu-item" onClick={() => this.setState({ open: !open })}>{labelStr}</div>

        {open && (
          <>
            <div className="box">
              {items.map((item, i) => {
                const label = item[0]
                const url = item[1]

                return (
                  <>
                    <Link href={url}><div className="menu-item">{label}</div></Link>
                  </>
                )
              })}
            </div>
          </>
        )}

        <style jsx>{`
          .box {
            width: 100%;
            background: #f7f7f7;
            box-sizing: border-box;
            padding: 10px;
            padding-bottom: 0px;
          }

          .menu-item {
            font-family: 'Roboto Mono';
            font-weight: 400;
            font-size: 14px;
            letter-spacing: .1em;
            color: #333;
            padding-bottom: 10px;
            text-transform: uppercase;
            cursor: pointer;
          }

          .menu-item:hover {
            color: #999;
          }

          .menu-item-selected {
            color: #999;
          }
        `}</style>
      </>
    )
  }
}

class Popout extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">


          <div className="icon">
            <img onClick={() => this.props.setShowPopoutMenu(false)} src="/icons/menu-opened.png" />
          </div>

          <div style={{ width: '100%', height: '32px' }}></div>

          <Link href="/"><div className="menu-item">About us</div></Link>
          <Link href="/our-service-commitment"><div className="menu-item">Our service commitment</div></Link>
          <Link href="/secured-tokens"><div className="menu-item">Secured tokens</div></Link>
          <Dropdown
            label="Services"
            items={[
              [ 'Label 1', '/url1' ],
              [ 'Label 2', '/url2' ],
              [ 'Label 3', '/url3' ],
            ]}
          />
          <Link href="/tokenizables"><div className="menu-item">Tokenizables</div></Link>
          <Link href="/compliance"><div className="menu-item">Compliance</div></Link>
          <Link href="/service-partners"><div className="menu-item">Service Partners</div></Link>
          <Link href="/smart-blog"><div className="menu-item">Smart blog</div></Link>
          <Link href="/smart-blog"><div className="menu-item">Smart blog</div></Link>
          <Dropdown
            label="CCS Client Opportunities"
            items={[
              [ 'Label 1', '/url1' ],
              [ 'Label 2', '/url2' ],
              [ 'Label 3', '/url3' ],
            ]}
          />
          <Link href="/new-page-2"><div className="menu-item">New Accounts</div></Link>
          <Link href="/careers"><div className="menu-item">Careers</div></Link>

          <div style={{ width: '100%', height: '32px' }}></div>

          <div className="line"></div>

          <div style={{ width: '100%', height: '32px' }}></div>

          <div className="copyright">2018 Cryptostock Creation Services Ltd.</div>

          <div style={{ width: '100%', height: '32px' }}></div>

          <Link href="/contact-us"><div className="schedule">Schedule</div></Link>


        </div>

        <style jsx>{`
          .icon {
            cursor: pointer;
          }

          .wrapper {
            box-sizing: border-box;
            width: 100%;
            max-width: 400px;
            height: 100%;
            padding: 16px;
            padding-top: 64px;
            background: #ffffff;
            text-align: center;
            overflow-y: scroll;
          }

          .menu-item {
            font-family: 'Roboto Mono';
            font-weight: 400;
            font-size: 14px;
            letter-spacing: .1em;
            color: #333;
            padding-bottom: 1.25em;
            text-transform: uppercase;
            cursor: pointer;
          }

          .menu-item:hover {
            color: #999;
          }

          .menu-item-selected {
            color: #999;
          }

          .line {
            width: 100%;
            height: 1px;
            background: #ebebeb;
          }

          .copyright {
            color: #333;
            font-family: 'alegreya';
            font-size: 16px;
          }

          .schedule {
            margin: auto;
            padding: 13px 26px;
            background: #33dd66;
            border-radius: 3px;
            width: fit-content;
            color: #fff;
            font-family: 'Roboto Mono';
            text-transform: uppercase;
            box-shadow: 0 2px 0 0 #21c653;
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
)(Popout)
