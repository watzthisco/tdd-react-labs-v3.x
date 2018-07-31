export default function thermometer(state = 10, action) {
  switch (action.type) {
    case 'INCREASE_TEMP':
      return state + 1
    case 'DECREASE_TEMP':
      return state - 1
    default:
      return state
  }
}
