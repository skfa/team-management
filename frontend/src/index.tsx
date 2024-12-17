import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StockDetails from './components/AddEditMember';
import TeamMembers, { TeamsLoader } from './components/TeamMembers';
import App from './App';
import AddEditMember from './components/AddEditMember';
import { AuthProvider } from './components/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <TeamMembers/>,
        loader: TeamsLoader,
      },
      {
        path: "/add-member/",
        element: <AddEditMember/>
      },
      {
        path: "/edit-member/:id",
        element: <AddEditMember/>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
