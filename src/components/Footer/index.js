import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="line"></div>
        <div className="wrapper">
          <div className="content">
            <Link href="/contact-us"><div className="footer-link">Contact us</div></Link>
            <Link href="/new-page-3"><div className="footer-link">Terms and conditions</div></Link>
            <Link href="/cookies"><div className="footer-link">Cookies</div></Link>
            <div className="clearfix"></div>
          </div>
        </div>

        <style jsx>{`
          .line {
            width: 100%;
            height: 1px;
            background: #f6f6f6;
          }

          .wrapper {
            box-sizing: border-box;
            width: 100%;
            padding: 64px;
          }

          .content {
            display: block;
            margin: auto;
            width: fit-content;
            max-width: 100%;
          }

          .footer-link {
            white-space: nowrap;
            float: left;
            font-family: 'Roboto Mono';
            font-weight: 400;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-size: 32px;
            color: #333;
            margin-left: 16px;
            margin-right: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            cursor: pointer;
          }

          .footer-link:hover {
            color: #999999;
          }
        `}</style>
      </>
    )
  }
}

export default Footer
