import React from 'react'
import { connect } from 'react-redux'

class Error404 extends React.Component {
  render() {
    const { width } = this.props.ui

    return (
      <>
        {width > 768 && <div style={{ width: '100%', height: '181px' }}></div>}

        <div className="content">
          <div className="text">
            We couldn't find the page you were looking for. This is either because:

            <ul>
              <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
              <li>The page you are looking for has been moved or deleted.</li>
            </ul>
      
            You can return to our homepage by clicking here, or you can try searching for the content you are seeking by clicking here.
          </div>
        </div>

        <style jsx>{`
          .content {
            box-sizing: border-box;
            width: 100%;
            max-width: 960px;
            margin: auto;
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
)(Error404)
