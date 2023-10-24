import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "~/lib/layout";
import Routings from "~/lib/router/Routings";
import { theme } from "~/lib/styles/theme";

import { store } from "./app/store";

const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  </Provider>
);

export default App;
