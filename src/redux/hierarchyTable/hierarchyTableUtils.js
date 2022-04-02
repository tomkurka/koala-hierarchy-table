const KEY_DATA = ["has_relatives", "has_phone"]
const KEY_SUB = "records"

export const hierarchyTableItemDeleteUtils = ({ data, ids }) => {
  let newData = Object.assign([], data)

  if (ids.length === 1) {
    newData.splice(ids[0], 1)
  } else if (ids.length === 2) {
    newData[ids[0]].kids[KEY_DATA[0]][KEY_SUB].splice(ids[1], 1)
    if (newData[ids[0]].kids[KEY_DATA[0]][KEY_SUB].length === 0) {
      newData[ids[0]].kids = {}
    }
  } else if (ids.length === 3) {
    newData[ids[0]].kids[KEY_DATA[0]][KEY_SUB][ids[1]].kids[KEY_DATA[1]][KEY_SUB].splice(ids[2], 1)
    if (
      newData[ids[0]].kids[KEY_DATA[0]][KEY_SUB][ids[1]].kids[KEY_DATA[1]][KEY_SUB].length === 0
    ) {
      newData[ids[0]].kids[KEY_DATA[0]][KEY_SUB][ids[1]].kids = {}
    }
  }

  return newData
}

export const hierarchyTableViewLayerDeleteUtils = ({ viewLayers, ids }) => {
  let newViewLayers = Object.assign([], viewLayers)

  if (ids.length === 1) {
    newViewLayers.splice(ids[0], 1)
  } else if (ids.length === 2) {
    newViewLayers[ids[0]].kids.splice(ids[1], 1)
  }

  return newViewLayers
}

export const convertToViewLayers = ({ data }) => {
  let viewLayers = []

  data.forEach(item => {
    viewLayers.push({
      view: false,
      kids: mapKids({ kids: item.kids, key: KEY_DATA[0] }),
    })
  })

  return viewLayers
}

const mapKids = ({ kids, key }) => {
  return kids?.[key]?.[KEY_SUB]?.length > 0
    ? [
        ...kids[key][KEY_SUB].map(() => ({
          view: false,
        })),
      ]
    : null
}

export const hierarchyTableToggleViewLayerUtils = ({ viewLayers, ids }) => {
  let newViewLayers = Object.assign([], viewLayers)

  if (ids.length === 1) {
    newViewLayers[ids[0]].view = !newViewLayers[ids[0]].view
  } else if (ids.length === 2) {
    newViewLayers[ids[0]].kids[ids[1]].view = !newViewLayers[ids[0]].kids[ids[1]].view
  }

  return newViewLayers
}
