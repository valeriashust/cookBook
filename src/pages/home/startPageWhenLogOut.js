import React, {Component} from "react";

import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles/index";

import backgroundImage from "../../images/pexels-photo-70497.jpeg";

const styles = theme => ({
    paper: {
        opacity: 0.5,
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        padding: 15,
        height: 500,
    },
    media: {
        height: 500,
    },
    tittle: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 170,
        marginLeft: 50,
    },
});

class StartPageWhenLogOut extends Component {

    render() {
        const {classes} = this.props;
        return (
            <main>
                <CardMedia image={backgroundImage} className={classes.media}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Typography
                                variant="display2"
                                color="inherit"
                                className={classes.tittle}
                                gutterBottom
                            >
                                Welcome to your personal cook book!
                                <Typography variant="headline"
                                            color="inherit"
                                            paragraph
                                >
                                    Add your favorite recipes at any time.
                                    <Typography variant="headline"
                                                color="inherit"
                                                paragraph
                                    >
                                        Please, sign in to start.
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                    </Paper>
                </CardMedia>
            </main>
        )
    }
}

export default withStyles(styles)(StartPageWhenLogOut)
