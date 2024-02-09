import React, { useState } from 'react';
import { Typography, Button, Link } from '@mui/joy';
import ReactLogo from 'assets/react.svg?react';
import ViteLogo from 'assets/vite.svg?react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Link href="https://vitejs.dev" target="_blank">
          <ViteLogo className="logo vite" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <ReactLogo className="logo react" />
        </Link>
      </div>
      <Typography level="h1">Vite + React</Typography>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography level="body-sm">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </div>
      <Typography level="body-md">
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default MyComponent;
