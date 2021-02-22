import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import nikeSpecial from "../../assets/product/nike-special.jpg"
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width:302
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        backgroundColor: "#b1e01e"
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    cardMedia:{
        backgroundSize:"contain"
    }
}));

export default function SpecialOfferCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        New shoes
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Special edition
                    </Typography>
                    <Divider/>
                    <Typography component="h5" variant="h3">
                        -20%
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                classes={{root:classes.cardMedia}}
                image={nikeSpecial}
                title="Live from space album cover"
            />
        </Card>
    );
}
