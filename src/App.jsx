import React from "react";
import AppRoutes from "./routes/routes"; // Importa o arquivo de rotas
import AppRoutesNotFound from "./routes/routesnotfound"; // Importa o arquivo de rotas para NotFound

const App = () => {
  return (
    <>
      {/* <AppRoutesNotFound /> */}
      <AppRoutes />
    </>
  );
};

export default App;
