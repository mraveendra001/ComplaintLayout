
// import './App.css';
// import Login from './components/Login';
// //import { BrowserRouter } from 'react-router-dom';
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Dashboard from './components/Dashboard';
// import ViewComplaint from './components/ViewComplaint';
// //import Loginold from './components/Login';
// const appRouter = createBrowserRouter([
//   {
//    path :'/',
//   element: <Login/>,
//   children:[
// ]
//   } , 
//   {
//     path :'/Dashboard',
//    element: <Dashboard  />,
//    children:[
//  ]
//    },
//    {
//     path :'/view-complaints',
//    element: <ViewComplaint />,
//    children:[
//  ]
//    }
//  ]);
// function App() {
//   return (
//     <div>
//       {/* <Login /> */}
//       <RouterProvider router={appRouter}/>
   
//     </div>
//   );
// }

// export default App;



import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewComplaint from './components/ViewComplaint';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/Dashboard" render={(props) => <Dashboard {...props} />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/view-complaints" element={<ViewComplaint />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

