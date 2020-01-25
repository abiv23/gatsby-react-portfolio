import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderOG = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

HeaderOG.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderOG.defaultProps = {
  siteTitle: ``,
}

export default HeaderOG
