import React, { useEffect, useState } from 'react';
import './App.css';
import Targeta from './Component/Targeta';
import TargetaLista from './Component/TargetaLista';
import Crucigrama from './Component/Crucigrama';
import Grid from '@mui/material/Unstable_Grid2';
import Barra from './Component/Barra'
import data from './resp.json'



function App() {

  const [ListaP,setListaP] = useState([])
  const [cargando, setCargando] = useState(true)


  // llevando data(tesp.json) a arreglo
  useEffect(() => {

    if (cargando) {
      let arreglo = []
      data.forEach(elem => {
        if (elem.orientacion === "H") {
          arreglo = [...arreglo,{ 'question':elem.question, 'pos':'H', 'num': elem.n }]
        }else {
          arreglo = [...arreglo,{ 'question':elem.question, 'pos':'V', 'num': elem.n }]
        }
      })
      setListaP(arreglo)
      setCargando(false)
    }


  }, [ListaP, cargando])

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
              <Crucigrama />
            </Grid>
          </Grid>

          <Grid xs={2.5}>
            <TargetaLista lista={ListaP} horizontal={false} />
          </Grid>

          <Grid xs={2.5}>
            <TargetaLista lista={ListaP} horizontal={true} />
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;


/**
 * 
 * 
 * 
 * function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
 */