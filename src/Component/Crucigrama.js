import { Card, Box} from "@mui/material";
import data from '../resp.json'

let mat = []


function Casilla(params) {
    const letra = params.valor;

    if (params.valor !== '0')
        return <Card sx={{ m: 0.3, p: 0.5, backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input id='entrada' type='text' maxLength='1' defaultValue={letra}/>
        </Card>
    return <Card sx={{ m: 0.3, p: 0.5, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Card>
}

function init_matriz() {
    mat = []
    for (let x = 0; x < 12; x++) {
        const rows = []
        for (let y = 0; y < 12; y++) {
            rows.push("0")
        }
        mat.push(rows)
    }
}

function put_word(word,x,y,pos) {
    let dx = 0;
    let dy = 0;

    if (pos === 'H') {
        dx = 1;
    }else{
        dy = 1;
    }

    for (let i = 0; i < word.length; i++) {
        const letra = word[i];
        mat[y + dy*i][x + dx*i] = letra
    }
}

function put_words() {
    data.forEach(elem => {
        put_word(elem.word, elem.cord.x, elem.cord.y, elem.orientacion)
    });
}


function Crucigrama(params) {
    const rows = []

    init_matriz()
    put_words()



    mat.forEach(row => {
        const aux = row.map(value => <Casilla valor={value} />)
        rows.push(aux)
    });

    return <Box sx={{ width: 500, height: 500, display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', }}>
        {rows}
    </Box>

}

export default Crucigrama


