import React from "react"

const RenderHeader = ({ keys }) => {
  return (
    <div className="ht-header">
      {keys.map(key => (
        <span key={key}>{key}</span>
      ))}
    </div>
  )
}

export default RenderHeader
