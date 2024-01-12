import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SprtPageProperty from "./pages/sepratePageProperty/SprtPageProperty";
import UserDetailCintext from "./context/UserDetailsContext";
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites : [],
    booking: [],
    token: null
  })

  return (
    <UserDetailCintext.Provider value={{userDetails, setUserDetails}} >

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading......</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              {/* intersting this suitation */}
              <Route path="/properties" >
                <Route index element={<Properties />} /> // set default properties path
                <Route path=":propertyID" element={<SprtPageProperty />} /> // seperate properties path
              </Route>
              {/* .................end this suitiation */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </UserDetailCintext.Provider>
  );
}

export default App;
