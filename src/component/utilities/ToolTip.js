import React, { Children } from 'react'
import ReactTooltip from 'react-tooltip'

const ToolTip = ({ id, children }) => {
  return (
    <>
      <ReactTooltip
        id={id}
        place="top"
        effect="solid"
        className="hover-tip"
        styleName="tooltip"
        backgroundColor="#0b84ff"
      >
        {children}
      </ReactTooltip>
    </>
  )
}

export default ToolTip
