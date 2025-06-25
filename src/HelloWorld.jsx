// import React from 'react';

// export default function HelloWorld() {
//   return <h1>Hello World from the Library thisal!</h1>;
// }

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function HelloWorld() {
    return (
      <>
        <h1>Hello World from the Library thisal!</h1>
        <Stack spacing={2} direction="column">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </>
  );
}