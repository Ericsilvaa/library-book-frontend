import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
    {/* <ThemeWrapper> */}
    <CssBaseline />
    <App />
    {/* </ThemeWrapper> */}
    {/* //       </LocalizationProvider> */}
  </BrowserRouter>
  //   </PersistGate>
  // </Provider>
);
