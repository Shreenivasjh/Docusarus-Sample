const React = require('react')

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? language + '/' : '') + doc
  }

  imgUrl(img) {
    const baseUrl = this.props.config.baseUrl
    return `${baseUrl}img/${img}`
  }

  render() {
    return (
      <div className="footer-background">
        <div className="line" />
        <div className="footerWrapper wrapper">
          <footer>
            <div className="content">
              <div className="footer">
                <div className="left">
                  <ul className="unstyled-list" />
                  <h6 className="byline">
                    {this.props.config.copyright}
                  </h6>
                </div>
                <div>
                <ul className="center">
                  <a className="footer-color" href="https://shelfperks.com/terms-of-service/">Terms of Service</a>
                  <a className="footer-color" href="https://shelfperks.com/privacy-policy/">Privacy Policy</a>
                  <a className="footer-color" href="https://shelfperks.com/#touch">Contact us</a>
                  <ul><h6 className="byline">
                    {this.props.config.copyright}
                  </h6></ul>
                </ul>
                </div>
                <div className="right">
                  <ul className="social-icons unstyled-list">
                    <li className="social-icon">
                      <a
                        href="<Twitter account>"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('<Image>')}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="<Repo page>"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('<Image>')}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="<Linked In URL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={this.imgUrl('<Image>')}
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>

                  <a href={this.props.config.baseUrl}>
                    <div className="footer-logo">
                      <img
                        src={this.imgUrl('<Image>')}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

module.exports = Footer