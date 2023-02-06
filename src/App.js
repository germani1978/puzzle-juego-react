import * as React from 'react';
import listaH from './listaH';
import listaV from './listaV';
import './App.css';
import Targeta from './Component/Targeta';
import TargetaLista from './Component/TargetaLista';
import Crucigrama from './Component/Crucigrama';
import Grid from '@mui/material/Unstable_Grid2';
import Barra from './Component/Barra'



function App() {
  return (
    <div className="App">

      <Grid  spacing={1} container justifyContent="center" >

        <Grid container xs={12} sx={{mb:2}}>
          <Barra/>
        </Grid>

        <Grid container xs={11}>
          <Grid container xs={1.5}>
            <Grid xs={12}>
              <Targeta className='nombre' name="Nombre" value="Germani" />
              <Targeta name="Nivel" value="2" />
            </Grid>
          </Grid>

          <Grid container xs={4.5}>
            <Grid xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
              <Crucigrama />
            </Grid>
          </Grid>

          <Grid xs={3}>
            <TargetaLista lista={listaH} horizontal={true} />
          </Grid>

          <Grid xs={3}>
            <TargetaLista lista={listaV} horizontal={false} />
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;


