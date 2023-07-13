const initialState = {
  word: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WORD':
      return {
        ...state,
        word: action.payload,
      }
    default:
      return state
  }
}