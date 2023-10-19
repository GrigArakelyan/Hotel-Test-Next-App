export const getCategoriesURL = `http://localhost:3000/api/categories`;
export const getSpecialOffersURL = `http://localhost:3000/api/special-offers`;
export const getFooterURl = `http://localhost:3000/api/footer`;

export const getFilterRoomsURL:(adults:number, children:number, day:string) => string = (adults, children, day) => {
   return `http://localhost:3000/api/search/rooms?adults=${adults}&children=${children}&day=${day}`
}

export const getFilterOffersURL:(adults:number, children:number, day:string) => string = (adults, children, day) => {
   return `http://localhost:3000/api/search/offers?adults=${adults}&children=${children}&day=${day}`
}

