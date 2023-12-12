import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRouters } from "./router/router";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* public routers */}
        {publicRouters.map(({ path, element: Element }, idx) => (
          <Route
            path={path}
            key={idx + path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
