import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "theme/theme";

import "styles/Fonts.css";
import "styles/App.css";
import "styles/Contact.css";

import "react-calendar/dist/Calendar.css";
import "styles/MiniCalendar.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "redux/store";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
