import { useState } from 'react';

let isHomeActive = true;
let isAddDestinationActive = false;
let isItineraryActive = false;
let isMapActive = false;

const isActive = (event) => {
  console.log(event.target.textContent)
  if (event.target.textContent === 'HOME') {
    isHomeActive = true;
  } else {
    isHomeActive = false;
  }

  if (event.target.textContent === 'ADD DESTINATION') {
    isAddDestinationActive = true;
  } else {
    isAddDestinationActive = false;
  }

  if (event.target.textContent === 'ITINERARY') {
    isItineraryActive = true;
  } else {
    isItineraryActive = false;
  }

  if (event.target.textContent === 'MAP') {
    isMapActive = true;
  } else {
    isMapActive = false;
  }

  console.log(isHomeActive, isAddDestinationActive, isItineraryActive, isMapActive)
};

export { isActive, isHomeActive, isAddDestinationActive, isItineraryActive, isMapActive };
