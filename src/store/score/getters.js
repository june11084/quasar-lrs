/*
export function someGetter (state) {
}
*/

export function getScore (state) {
  console.log('getScore ran')
  return state.score
}

export function getFinal (state) {
  return state.score
}
