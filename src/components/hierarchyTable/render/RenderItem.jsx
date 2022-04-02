import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {
  hierarchyTableItemDelete,
  hierarchyTableToggleViewLayers,
} from "../../../redux/hierarchyTable/hierarchyTableActions"
import { selectViewLayers } from "../../../redux/hierarchyTable/hierarchyTableSelectors"
import { isKidVisible } from "../../../utils/hierarchyTableRender"

const RenderItem = ({ dataItem, ids, haveKids }) => {
  const dispatch = useDispatch()
  const viewLayers = useSelector(selectViewLayers)

  return (
    <div
      className="ht-item"
      key={dataItem}
      onClick={() => {
        if (haveKids) {
          dispatch(hierarchyTableToggleViewLayers({ ids }))
        }
      }}
    >
      <span className="arrow-show-hidden">
        {haveKids ? (isKidVisible({ viewLayers, ids }) ? "↓" : "→") : ""}
      </span>
      {dataItem.map((value, i) => (
        <span key={i}>{value}</span>
      ))}
      <button
        onClick={e => {
          e.stopPropagation()
          dispatch(hierarchyTableItemDelete({ ids }))
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default RenderItem
