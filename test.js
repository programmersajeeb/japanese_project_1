// const onSubmit = async (data) =>{
//   const userData = {
//     name: data.name,
//     email: data.email
//   }
//   await axios
// 	.post('http://localhost:8080/user', userData)
// 	.then(res => {
// 		if (res.data.insertedId) {
// 			SweetAlert("Added successfully");
// 			// reset();
// 		}
// 	})

// }

// import Login from "./components/Login/Login";
// import AddInventory from "./components/ManageInventorys/AddInventory";
// import ManageInventory from "./components/ManageInventorys/ManageInventory";
// import MyItems from "./components/MyItems/MyItems";
// import Navbar from "./components/Navbar/Navbar";
// import NotFound from "./components/NotFound/NotFound";
// import Register from "./components/Register/Register";
// import RequireAuth from "./components/RequireAuth/RequireAuth";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route
//           path="/inventory/:id"
//           element={
//             <RequireAuth>
//               <InventoryDetails />
//             </RequireAuth>
//           }
//         ></Route>
//         <Route
//           path="/manage-inventory"
//           element={
//             <RequireAuth>
//               <ManageInventory />
//             </RequireAuth>
//           }
//         ></Route>
//         <Route
//           path="/add-inventory"
//           element={
//             <RequireAuth>
//               <AddInventory />
//             </RequireAuth>
//           }
//         ></Route>
//         <Route
//           path="/my-items"
//           element={
//             <RequireAuth>
//               <MyItems />
//             </RequireAuth>
//           }
//         ></Route>
//         <Route path="/blogs" element={<Blogs />}></Route>
//         <Route path="/reset-password" element={<ForgetPassword />}></Route>
//         <Route path="*" element={<NotFound />}></Route>
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center pt-[35vh] ">
        {" "}
        <GridLoader size={10} />
      </div>
    );
  }
  if (error) {
    toast.error("something wrong!");
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
