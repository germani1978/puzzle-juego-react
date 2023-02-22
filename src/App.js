import React, { useEffect, useState } from 'react';
import './App.css';
import Targeta from './Component/Targeta';
import TargetaLista from './Component/TargetaLista';
import Crucigrama from './Component/Crucigrama';
import Grid from '@mui/material/Unstable_Grid2';
import Barra from './Component/Barra'

const URL = 'http://localhost:8000/'

function App() {

  const [Lista,setListaP] = useState([])
  const [cargando, setCargando] = useState(true)


  // llevando data(tesp.json) a arreglo
  useEffect(() => {

    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        if (cargando) {
              console.log('app',data);
              let arreglo = []
              data.forEach(elem => {
                if (elem.orientacion === "H") {
                  arreglo = [...arreglo,{ 'word':elem.word, 'question':elem.question, 'pos':'H', 'x':elem.cord.x, 'y':elem.cord.y,'num': elem.n }]
                }else {
                  arreglo = [...arreglo,{ 'word': elem.word, 'question':elem.question, 'pos':'V', 'x':elem.cord.x, 'y':elem.cord.y,'num': elem.n }]
                }
              })
              setListaP(arreglo)
              setCargando(false)
            }
    })
    .catch(err => console.log(err))
    
   

  }, [Lista, cargando])

  if (cargando) {
    return <div><p>Cargando...</p></div>
  } else{

  return (
    <div className="App">

      <Grid spacing={1} container justifyContent="center" >

        <Grid container xs={12} sx={{ mb: 2 }}>
          <Barra />
        </Grid>

        <Grid container xs={11}>
          <Grid container xs={1.5}>
            <Grid xs={12}>
              <Targeta className='nombre' name="Nombre" value="Germani" />
              <Targeta name="Nivel" value="2" />
            </Grid>
          </Grid>

          <Grid container xs={5}>
            <Grid xs={12} sx={{ display: 'flex', justifyContent: "center" }}>
              <Crucigrama lista={Lista}/>
            </Grid>
          </Grid>

          <Grid xs={2.5}>
            <TargetaLista lista={Lista} horizontal={false} />
          </Grid>

          <Grid xs={2.5}>
            <TargetaLista lista={Lista} horizontal={true} />
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
  }
}

export default App;


