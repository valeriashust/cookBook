import React from "react";
import classnames from "classnames";

import { connect } from "react-redux";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import EditPost from './editPost';

import { deletePost, editPost } from "../store/actions";

const styles = theme => ({
  card: {
    width: 300,
    margin: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "purple"
  },
});

class Post extends React.Component {
  state = {
    expanded: false,
    anchorEl: null,
    isOpen: false,
    currentIndex: null,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null});
  };

  handleDelete = index => {
    const { onDeletePost, userName} = this.props;
    onDeletePost(userName, index);
    this.setState({ anchorEl: null });
  };

  handleEdit = index => {
    this.setState({ anchorEl: null, isOpen:true, currentIndex: index });
  };

  handleCloseDialog = (newPost) => {
    const { onEditPost, userName} = this.props;
    const { currentIndex } = this.state;
    if (newPost) {
      onEditPost(userName, currentIndex, newPost)
    } else {
      console.warn('close');
    }
    this.setState({isOpen:false})
  };

  render() {
    const { classes, data, index } = this.props;
    const { anchorEl, isOpen } = this.state;

    return (
      <Card className={classes.card}>
      <EditPost
            open={isOpen}
            onClose={this.handleCloseDialog}
            value={this.state.value}
            data={data}
          />
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.name}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleDelete.bind(null, index)}>
            Delete
          </MenuItem>
          <MenuItem onClick={this.handleEdit.bind(null, index)}>Edit</MenuItem>
        </Menu>
        <CardMedia
          className={classes.media}
          image={data.image}
          title="Contemplative Reptile"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Recipe:
            </Typography>
            <Typography paragraph>{data.content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {
    profile: { userName },
  } = state;
  return { userName };
};

const mapDispatchToProps = dispatch => ({
  onDeletePost: (userName, index) => dispatch(deletePost(userName, index)),
  onEditPost: (userName, index, newPost) => dispatch(editPost(userName, index, newPost))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Post);
