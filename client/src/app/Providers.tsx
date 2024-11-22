'use client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/createStore';
import { Provider } from 'react-redux';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
