import { CssBaseline } from '@mui/material';
import { LazyRouter } from './routes/router/LazyRouter';

function App() {
  return (
    <>
      <style>
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>
      <CssBaseline />
      <LazyRouter />
    </>
  );
}

export default App;
