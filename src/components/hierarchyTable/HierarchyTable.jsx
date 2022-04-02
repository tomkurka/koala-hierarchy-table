import React from "react"
import { useSelector } from "react-redux"
import { selectHierarchTableData } from "../../redux/hierarchyTable/hierarchyTableSelectors"
import RenderTable from "./render/RenderTable"

import "./hierarchyTable.scss"

const HierarchyTable = () => {
  const data = useSelector(selectHierarchTableData)

  return (
    <div className="ht-container">
      <RenderTable data={data} />
    </div>
  )
}

export default HierarchyTable
