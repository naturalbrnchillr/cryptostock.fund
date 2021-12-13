import produce from 'immer'

const initialState = {
  width: undefined,
  height: undefined,

  showPopoutMenu: false
}

const nextState = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'SET_DIMENSIONS':
        draft.width = action.dimensions.width
        draft.height = action.dimensions.height
        break

      case 'SET_SHOW_POPOUT_MENU':
        draft.showPopoutMenu = action.show
        break
    }
  })

export default nextState
