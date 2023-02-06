import matriz from "../matriz"
import { Card, Box} from "@mui/material";

function Casilla(params) {
    if (params.valor !== '0')
        return <Card sx={{ m: 0.3, p: 0.5, backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input id='entrada' type='text' maxLength='1' />
        </Card>
    return <Card sx={{ m: 0.3, p: 0.5, backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    </Card>
}

function Crucigrama(params) {
    const rows = []

    matriz.forEach(row => {
        const aux = row.map(value => <Casilla valor={value} />)
        rows.push(aux)
    });

    return <Box sx={{ width: 500, height: 500, display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', }}>
        {rows}
    </Box>

}

export default Crucigrama


// recorre las filas de la matriz

// por cada fila crea una fila de Cards