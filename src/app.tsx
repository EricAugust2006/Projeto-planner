import{ MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from './pages/create-trip';
import { TripDetailsPage } from './pages/tripDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}