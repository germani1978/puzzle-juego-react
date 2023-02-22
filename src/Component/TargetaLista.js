import { Card, Container, Typography } from "@mui/material"


export default function TargetaLista(params) {

    const lista = params.lista

    let tipo = 'H'
    if (!params.horizontal) tipo = "V"

    let preguntas = lista.filter( elem => {  return elem.pos === tipo;  })

    const listItem = preguntas.map(
        ((elem) => <p className="parrafo">
                    <Typography sx={{display:'inline',fontWeight:'bold'}} variant="body1">{elem.num+')'}</Typography>
                    <Typography sx={{display:'inline'}}  variant="caption">{elem.question+' '}</Typography>
                </p>)
    )

    return <Card sx={{p:1.5,pb:4,mx:1, textAlign:'justify', fontWeight: 'bold',backgroundColor: 'lightgoldenrodyellow', borderRadius:3 }}>

                <Typography sx={{fontWeight:'bold', mb:1, textAlign:'center'}} variant="body1" >
                    Preguntas { !params.horizontal ? 'Horizontales': 'Verticales'}
                </Typography>

                <Container>
                    {listItem}
                </Container>

            </Card>
}