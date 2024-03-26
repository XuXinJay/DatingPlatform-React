import { useState } from "react";
import "./App.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            className="text-[red]"
            component="h1"
            sx={{ mb: 2 }}
          >
            Material UI Vite.js example in TypeScript
            <br />
            <p className="text-[#fff]">{count}</p>
          </Typography>
        </Box>
        <button type="button" onClick={addCount}>
          點我
        </button>
      </Container>
    </>
  );
}

export default App;
