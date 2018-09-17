import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

const styles = () => ({
    textField: {
        width: "100%"
    }
});

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.data.name,
      image: props.data.image,
      content: props.data.content
    };
  }

  handleCancel = () => {
    this.props.onClose();
  };

  handleOk = () => {
    const {
      props: { onClose, data },
      state: { name, image, content }
    } = this;
    const newPost = {
      ...data,
      name,
      image,
      content
    };
    onClose(newPost);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="md"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogContent>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
          <TextField
            id="imgUrl"
            label="Image URL"
            className={classes.textField}
            value={this.state.image}
            onChange={this.handleChange("image")}
            margin="normal"
          />
          <TextField
            id="content"
            label="Recipe"
            className={classes.textField}
            value={this.state.content}
            onChange={this.handleChange("content")}
            margin="normal"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(EditPost);
