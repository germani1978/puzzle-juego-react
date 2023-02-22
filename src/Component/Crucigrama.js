import { Card, Box, Typography } from "@mui/material";

let mat = []

function FondoAzul(params) {
   return <Card sx={{ m: 0.3, p: 0.5, position:'relative' , backgroundColor: 'lightblue', display: 'flex',  justifyContent: 'center', alignItems: 'center' }}>
            <input id='entrada' type='text' maxLength='1' defaultValue={params.letra}/>
            <Typography sx={{position:'absolute', top:0, left:1, fontSize:'0.6rem', fontWeight:"bold", color:'blue'}}>{params.num}</Typography>
        </Card>
}

function FondoNegro() {
    return <Card sx={{ m: 0.3, p: 0.5, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Card>
}




function Casilla(params) {
    if (params.letra !== '0') {
        return <FondoAzul letra={params.letra} num={params.num}/>
    }
    return <FondoNegro/>
}

function init_matriz() {
    mat = []
    for (let x = 0; x < 12; x++) {
        const rows = []
        for (let y = 0; y < 12; y++) {
            rows.push({'letra':"0"})
        }
        mat.push(rows)
    }
}

function put_word(word, x, y, pos,num) {
    let dx = 0;
    let dy = 0;

    if (pos === 'H') {
        dx = 1;
    } else {
        dy = 1;
    }

    for (let i = 0; i < word.length; i++) {
        const letra = word[i];
        if (i === 0)  mat[x + dx * i][y + dy * i] = {'letra':letra, 'num':num}; else mat[x + dx * i][y + dy * i] = {'letra':letra}
    }
}

function put_words(lista) {
    console.log('cruzi',lista);
    lista.forEach(elem => {
        put_word(elem.word, elem.x, elem.y, elem.pos, elem.num)
    });
}


function Crucigrama(params) {




    const rows = []

    init_matriz()              //crea e inicializa la matriz mat
    put_words(params.lista)    //pone las palabras en la matriz mat

    mat.forEach(row => {       //crea 12x12 casillas de cards con el contenido de la letra y el numero
        const aux = row.map(value => <Casilla letra={value.letra} num={value.num} />)
        rows.push(aux)
    });

    //crea una grilla de 12x12 con todas la cards anteriores
    return <Box sx={{ width: 600, height: 600, display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', }}> 
        {rows} 
    </Box>

}

export default Crucigrama


