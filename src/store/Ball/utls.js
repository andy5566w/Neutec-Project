export function getRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getUniqueID() {
  return Math.random().toString(16).slice(2)
}
