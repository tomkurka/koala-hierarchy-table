import React from "react"
import RenderTable from "./RenderTable"
import { useSelector } from "react-redux"
import { selectViewLayers } from "../../../redux/hierarchyTable/hierarchyTableSelectors"
import { isKidVisible } from "../../../utils/hierarchyTableRender"

const RenderKids = ({ dataKids, ids }) => {
  const viewLayers = useSelector(selectViewLayers)

  const view = isKidVisible({ viewLayers, ids })

  return (
    <div className="ht-kids">
      {view && (
        <>
          <div className="ht-kids-name">{Object.keys(dataKids)[0]}</div>
          <RenderTable data={Object.values(dataKids)[0].records} ids={ids} />
        </>
      )}
    </div>
  )
}

export default RenderKids
