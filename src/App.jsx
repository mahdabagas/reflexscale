import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import ProfileCtx from "./context/ProfileContext";
import LoginCtx from "./context/LoginContext";
import { Suspense, lazy } from "react";
import PageLoading from "./components/loader/PageLoading";

const Home = lazy(() => wait(1000).then(() => import("../src/pages/Home")));
const Test = lazy(() => wait(1000).then(() => import("../src/pages/Test")));
const Profile = lazy(() =>
  wait(1000).then(() => import("../src/pages/Profile"))
);
const Register = lazy(() =>
  wait(1000).then(() => import("../src/pages/Register"))
);

function App() {
  return (
    <div className="App">
      <LoginCtx>
        <ProfileCtx>
          <Routes>
            <Route element={<SuspenseWrapper />}>
              <Route path="/" element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path="/test" element={<Test />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </ProfileCtx>
      </LoginCtx>
    </div>
  );
}

const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Outlet />
    </Suspense>
  );
};

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default App;
