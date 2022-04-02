import { createSelector } from "reselect"

const selectHierarchTable = state => state.hierarchyTable

export const selectHierarchTableData = createSelector([selectHierarchTable], ht => ht.data)

export const selectViewLayers = createSelector([selectHierarchTable], ht => ht.viewLayers)
