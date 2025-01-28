import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="component-character-gacha button"
      >
        <span className="component-text1">
          {props.button11 ?? (
            <Fragment>
              <span className="component-text5">Button</span>
            </Fragment>
          )}
        </span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="component-armory button"
      >
        <span className="component-text2">
          {props.button111 ?? (
            <Fragment>
              <span className="component-text8">Button</span>
            </Fragment>
          )}
        </span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="component-gear button"
      >
        <span className="component-text3">
          {props.button112 ?? (
            <Fragment>
              <span className="component-text6">Button</span>
            </Fragment>
          )}
        </span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="component-more-art button"
      >
        <span className="component-text4">
          {props.button1 ?? (
            <Fragment>
              <span className="component-text7">Button</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button11: undefined,
  button112: undefined,
  button1: undefined,
  button111: undefined,
}

AppComponent.propTypes = {
  button11: PropTypes.element,
  button112: PropTypes.element,
  button1: PropTypes.element,
  button111: PropTypes.element,
}

export default AppComponent
