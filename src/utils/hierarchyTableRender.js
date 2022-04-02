export const isKidVisible = ({ viewLayers, ids }) => {
  if (ids.length === 1) {
    return viewLayers[ids[0]].view
  } else if (ids.length === 2) {
    return viewLayers[ids[0]].kids[ids[1]].view
  }
  return false
}
