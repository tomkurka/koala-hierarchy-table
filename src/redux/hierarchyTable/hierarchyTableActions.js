import HIERARCHY_TABLE_ACTIONS from "./hierarchyTableTypes"

export const hierarchyTableItemDelete = ({ ids }) => ({
  type: HIERARCHY_TABLE_ACTIONS.DELETE_ITEM,
  payload: { ids },
})
export const hierarchyTableToggleViewLayers = ({ ids }) => ({
  type: HIERARCHY_TABLE_ACTIONS.TOGGLE_VIEW_LAYERS,
  payload: { ids },
})
