export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const READ_CART = 'READ_CART'

export interface Service {
  id: string
  title: string
  category: string
  requirements?: string[]
  check?: boolean
}

export interface AddCartItem {
  type: typeof ADD_CART_ITEM
  payload: Service
}

export interface RemoveCartItem {
  type: typeof REMOVE_CART_ITEM
  payload: string
}

export interface ReadCart {
  type: typeof READ_CART
  payload: Service[]
}

export type CartActionTypes = AddCartItem | RemoveCartItem | ReadCart
