import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Start from './Start'
import PersonalDetails, { action as personalDetailasAction } from './PersonalDetails';
import LoanDetails, { action as loanDetailsAction } from './LoanDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Start />} />
      <Route path="personalDetails" element={<PersonalDetails />} action={personalDetailasAction} />
      <Route path="loanDetails" element={<LoanDetails />} action={loanDetailsAction} />
    </Route>
  )
)

export default function Root() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
