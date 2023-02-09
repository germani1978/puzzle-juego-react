import { Card, Container, Typography } from "@mui/material"


export default function TargetaLista(params) {

    console.log(params.lista);

    const listItem = params.lista.map(
        (elem => <p className="parrafo">
                    <Typography sx={{display:'inline',fontWeight:'bold'}} variant="body1">{elem.num+') '}</Typography>
                    <Typography sx={{display:'inline'}}  variant="caption">{elem.pre}</Typography>
                </p>)
    )

    return <Card sx={{p:1.5,pb:4,mx:1, textAlign:'justify', fontWeight: 'bold',backgroundColor: 'lightgoldenrodyellow', borderRadius:3 }}>

                <Typography sx={{fontWeight:'bold', mb:1, textAlign:'center'}} variant="body1" >
                    Preguntas { params.horizontal ? 'Horizontales': 'Verticales'}
                </Typography>

                <Container>{listItem}</Container>

            </Card>
}