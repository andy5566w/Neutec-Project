export function setClickedItemByKey(key, items) {
  for (const item of items) {
    if (
      item.key === key ||
      (Array.isArray(item.children) && setClickedItemByKey(key, item.children))
    ) {
      item.isClicked = true
      return item
    }
  }
}

export function setItemsToDefault(items, depth = 1) {
  for (const item of items) {
    if (Array.isArray(item.children)) {
      setItemsToDefault(item.children, depth + 1)
    }
    item.isClicked = false
    item.depth = depth
  }
  return items
}

export function flatItems(items, result = []) {
  for (const item of items) {
    const { children, depth, isClicked, ...rest } = item
    result.push(rest)
    if (Array.isArray(item.children)) {
      flatItems(item.children, result)
    }
  }
  return result
}
