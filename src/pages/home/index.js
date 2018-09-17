import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Post from "../../components/post";
import EditPost from "../../components/editPost";
import StartPageWhenLogOut from "./startPageWhenLogOut";

import {logOut, addingPost} from "./../../store/actions";

const styles = theme => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    toolbarTitle: {
        flex: 1
    },
});

class Home extends Component {
    state = {
        isOpen: false,
    };
    renderItems = () => {
        const {posts} = this.props;
        return posts.map((item, index) => {
            return <Post data={item} index={index}/>;
        });
    };

    handleSignInButtonPress = () => {
        const {history, profile, onLogOut} = this.props;
        if (profile.userName) {
            onLogOut();
        } else {
            history.push("/");
        }
    };

    handleCloseDialog = (newPost) => {
        const {onAddPost, userName} = this.props;
        if (newPost) {
            onAddPost(userName, newPost)
        }
        this.setState({isOpen: false})
    };

    handleAddingPost = () => {
        this.setState({isOpen: true});
    };

    render() {
        const {classes, profile} = this.props;
        const data = {
            name: "",
            image: "",
            content: "",
        };
        return (
            <div>
                <EditPost
                    open={this.state.isOpen}
                    onClose={this.handleCloseDialog}
                    value={this.state.value}
                    data={data}
                />
                <CssBaseline/>
                <div className={classes.layout}>
                    <Toolbar className={classes.toolbarMain}>
                        <Typography
                            variant="headline"
                            color="inherit"
                            align="left"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            Cook Book
                        </Typography>
                        {!profile.userName ? null : (
                            <Button
                            variant="outlined"
                            size="small"
                            onClick={this.handleAddingPost}
                            >
                                Add Post
                            </Button>
                        )
                        }
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={this.handleSignInButtonPress}
                        >
                            {!profile.userName ? "Sign in" : "Log out"}
                        </Button>
                    </Toolbar>
                    {!profile.userName && (<StartPageWhenLogOut />)}
                </div>
                <Grid container direction="row" justify="center" alignItems="baseline">
                    {this.renderItems()}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        profile: {userName, posts},
        profile
    } = state;
    return {userName, posts, profile};
};

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(logOut()),
    onAddPost: (userName, newPost) => dispatch(addingPost(userName, newPost)),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withStyles(styles)
)(Home);
