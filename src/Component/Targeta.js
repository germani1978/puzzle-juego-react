
import { Card, Typography } from "@mui/material"

export default function Targeta(params) {

    return <Card sx={{
        p: 1,
        mb: 1,
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: 'bold',
        borderRadius: 2
    }}>
        <Typography variant="body1"sx={{fontWeight:'bold'}}>
            {params.name}:&nbsp;
        </Typography>
        <Typography variant="body1" >
            { params.value}
        </Typography>

    </Card>
}