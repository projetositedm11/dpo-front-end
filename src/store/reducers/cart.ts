import {
  Service,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CartActionTypes,
  READ_CART,
} from '../actions/cart/types'

const initialState: Service[] = []

export default function cart(state = initialState, action: CartActionTypes): Service[] {
  const { type, payload } = action
  switch (type) {
    case ADD_CART_ITEM:
      return [
        ...state,
        {
          ...(payload as Service),
        },
      ]
    case REMOVE_CART_ITEM:
      return state.filter(({ id }) => id !== payload)
    case READ_CART:
      return payload as Service[]
    default:
      return state
  }
}
