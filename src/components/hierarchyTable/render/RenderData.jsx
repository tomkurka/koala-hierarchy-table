import React from "react"
import RenderItem from "./RenderItem"
import RenderKids from "./RenderKids"

const RenderData = ({ data, ids }) => {
  return data.map((item, i) => (
    <div className="ht-data" key={i}>
      <RenderItem
        dataItem={Object.values(item.data)}
        ids={[...ids, i]}
        haveKids={!!Object.values(item.kids).length}
      />
      {Object.values(item.kids).length > 0 && <RenderKids dataKids={item.kids} ids={[...ids, i]} />}
    </div>
  ))
}

export default RenderData
