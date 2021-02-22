import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import nike1 from "../../assets/product/nike1.jpg"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    cardContent: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 16px 0 16px"
    }
});

export default function ItemCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={nike1}
                    title="Nike PG 4"
                />
                <CardContent classes={{root: classes.cardContent}}>
                    <Typography gutterBottom variant="h6" component="h2">
                        Nike PG 4
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        399$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    В корзину
                </Button>
                <Button size="small" color="primary">
                    Быстрый просмотр
                </Button>
                <Button size="small" color="primary">
                    В избранное
                </Button>
            </CardActions>
        </Card>
    );
}
