import { ADD_CART_ITEM, REMOVE_CART_ITEM, Service, CartActionTypes, READ_CART } from './types'

export function addCartItem(newService: Service): CartActionTypes {
  let services: Service[] = JSON.parse(localStorage.getItem('cart'))

  if (!services) {
    services = []
  }

  services.push(newService)
  localStorage.setItem('cart', JSON.stringify(services))

  return {
    type: ADD_CART_ITEM,
    payload: newService,
  }
}

export function removeCartItem(id: string): CartActionTypes {
  let services: Service[] = JSON.parse(localStorage.getItem('cart'))

  let newServices: Service[] = []

  newServices = services.filter((service) => service.id !== id)

  localStorage.setItem('cart', JSON.stringify(newServices))

  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  }
}

export function readCart(): CartActionTypes {
  let services: Service[] = JSON.parse(localStorage.getItem('cart'))

  return {
    type: READ_CART,
    payload: services,
  }
}
