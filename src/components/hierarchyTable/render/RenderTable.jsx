import React from "react"
import RenderData from "./RenderData"
import RenderHeader from "./RenderHeader"

const RenderTable = ({ data, ids = [] }) => {
  if (data.length === 0) {
    return <div>No data</div>
  }

  return (
    <div className="ht">
      <RenderHeader keys={Object.keys(data[0].data)} />
      <RenderData data={data} ids={ids} />
    </div>
  )
}

export default RenderTable
