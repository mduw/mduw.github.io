import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alertMsg: {
    fontSize: "1.6rem",
    color: "#4BB543",
    backgroundColor: "#290847",
    fontWeight: 800,
    marginBottom: "3rem",
    borderRadius: 0,
    boxShadow: 0,
    textAlign: "center",
    width: "100%",
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Contact = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const resetForm = () => {
    const form = document.forms["contact-sheet"];
    form.reset();
  };

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyLMPBis-3y6j--nhZcMvMcSgWSCz-l-yQUmwtFL7q0puFsOBE3lvGkZO5pTG0ia1l-_w/exec";

  const onSubmit = (data) => {
    const submitButton = document.getElementById("contact-form-submit-button");
    const contactForm = document.getElementById("contact-form");

    submitButton.disabled = true;
    submitButton.className = "btn-disabled";
    submitButton.innerText = "Messaging...";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(contactForm),
    })
      .then((res) => {
        console.log("response is: ", res);
        setSnackbarOpen(true);
        submitButton.innerText = "Message Mitchell";
        submitButton.className = "btn-submit";
        submitButton.disabled = false;
        document.forms["contact-sheet"].reset();
      })
      .catch((error) => {
        console.log("error is", error);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <section id="contact">
      <div className="title">Contact</div>
      <form
        id="contact-form"
        name="contact-sheet"
        className="row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="Name"
          name="Name"
          required={true}
          fullWidth
          placeholder="Your Name"
          autoComplete="name"
          InputProps={{ disableUnderline: true }}
        />

        <TextField
          id="Email"
          name="Email"
          required={true}
          fullWidth
          type="email"
          placeholder="Email"
          autoComplete="email"
          InputProps={{ disableUnderline: true }}
        />

        <TextField
          id="Message"
          name="Message"
          required={true}
          fullWidth
          multiline
          placeholder="Your message goes here"
          rows="8"
          InputProps={{ disableUnderline: true }}
        />

        <button
          id="contact-form-submit-button"
          type="submit"
          className="btn-submit"
          disabled={false}
        >
          Message Mitchell
        </button>
      </form>
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} className={classes.alertMsg}>
            Message sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Contact;
