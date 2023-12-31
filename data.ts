import { RoomItemType, SpecialOffersType } from "./types/types";

export const categories:RoomItemType[] = [
   {
      id: Math.random(),
      lable: "Rooms",
      category: "rooms",
      src: "Rooms.png",
      href: "/rooms",
      type: "big",
      quantity: {
        adults: 2,
        children: 2
      }
    },
    {
      id: Math.random(),
      lable: "Dinning",
      category: "dinning",
      src: "Dining.png",
      href: "/dinning",
      type: "small",
      quantity: {
        adults: 5,
        children: 4
      }
    },
    {
      id: Math.random(),
      lable: "Conferance & Meetings",
      category: "conferance & meetings",
      src: "Conferences.png",
      href: "/conference",
      type: "small",
      quantity: {
        adults: 7,
        children: 0
      }
    },
    {
      id: Math.random(),
      lable: "Service & Facilities",
      category: "service & facilities",
      src: "Service.png",
      href: "/service",
      type: "small",
      quantity: {
        adults: 10,
        children: 5
      }
    },
    {
      id: Math.random(),
      lable: "Wedding Package",
      category: "wedding package",
      src: "Wedding.png",
      href: "/wedding",
      type: "small",
      quantity: {
        adults: 10,
        children: 10
      }
    }
];

export const specialOffers:SpecialOffersType[] = [
   {
      id: Math.random(),
      lable: "Hooneymoon",
      categoty: "Room",
      src: "Hooneymoon.png",
      text: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      price: 699,
      numberOfPeople: 4,
      kindOf: "night",
      href: "/"
    },
    {
      id: Math.random(),
      lable: "Meetings",
      categoty: "Room",
      src: "Meetings.png",
      text: "Experience an Exclusively Private Environment to Boost Your Productivity",
      price: 999,
      numberOfPeople: 30,
      kindOf: "night",
      href: "/"
    },
    {
      id: Math.random(),
      lable: "Romantic Dining",
      categoty: "Dining",
      src: "RomanticDining.png",
      text: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      price: 499,
      numberOfPeople: 2,
      kindOf: "table",
      href: "/"
    }
];

export const footer:string[] = [    
   "About us",
   "FAQ",
   "Services & Facilities",
   "Contact",
   "Term of Use",
   "Careers",
   "Location",
   "Privacy Police",
   "How to book"
];