import "./App.css";

import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid spacing={4} container direction="column">
        {/* Box es una especie de "div" que nos da acceso a distintos */}
        <Grid item>
          <Button variant="outlined" color="secondary">
            {/* le paso props a la componente Button */}
            Cancelar compra
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Comprar
          </Button>
        </Grid>
      </Grid>

      <Box>
        <input type="date" />
      </Box>
    </div>
  );
}

export default App;
