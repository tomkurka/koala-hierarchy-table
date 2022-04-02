import dataJSON from "../../data/example-data.json"
import HIERARCHY_TABLE_ACTIONS from "./hierarchyTableTypes"
import {
  convertToViewLayers,
  hierarchyTableItemDeleteUtils,
  hierarchyTableToggleViewLayerUtils,
  hierarchyTableViewLayerDeleteUtils,
} from "./hierarchyTableUtils"

const INITIAL_STATE = {
  data: dataJSON,
  viewLayers: convertToViewLayers({ data: dataJSON }),
}

const hierarchyTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HIERARCHY_TABLE_ACTIONS.DELETE_ITEM:
      return {
        ...state,
        data: hierarchyTableItemDeleteUtils({ data: state.data, ids: action.payload.ids }),
        viewLayers: hierarchyTableViewLayerDeleteUtils({
          viewLayers: state.viewLayers,
          ids: action.payload.ids,
        }),
      }
    case HIERARCHY_TABLE_ACTIONS.TOGGLE_VIEW_LAYERS:
      return {
        ...state,
        viewLayers: hierarchyTableToggleViewLayerUtils({
          viewLayers: state.viewLayers,
          ids: action.payload.ids,
        }),
      }
    default:
      return state
  }
}

export default hierarchyTableReducer
