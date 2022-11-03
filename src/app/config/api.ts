import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.restaurant.com':'http://localhost:3000'
export const productsUrl = baseUrl +'/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
export const adminUrl = baseUrl + '/Admin-signup'