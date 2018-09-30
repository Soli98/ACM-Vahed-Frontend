import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/user_actions';
import { Field, reduxForm } from 'redux-form';
import {
    Paper,
    Button,
    TextField,
    Select,
    FormControl,
    InputLabel,
  } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export class SignupForm extends Component {

  renderTextField({
      input,
      label,
      meta: { touched, error },
      ...custom
    }) {
      return (
        <div>
          <TextField
              fullWidth={true}
              label={label}
              helperText={touched && error}
              error={touched && !!error}
              {...input}
              {...custom}
          />
        </div>
      )
  }

  renderSelectField({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) {
    return (
      <FormControl fullWidth={custom.fullWidth}>
        <InputLabel>{label}</InputLabel>
        <Select
          error={touched && !!error}
          {...input}
          onChange={(event) => input.onChange(event.target.value)}
          children={children}
          {...custom}
        />
      </FormControl>
    )
  }

  onSubmit(values) {
      this.props.signup(values);
  }

  render() {
      const { handleSubmit } = this.props;
      return (
          <Paper style={{
            width: '300px',
            margin: 'auto',
            padding: '10px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Typography variant="subheading" color="inherit" noWrap align="center">
                      ثبت‌نام
                  </Typography>
                  <div style={{
                      margin: '10px auto',
                  }}>
                      <Field
                          fullWidth={true}
                          name="email"
                          component={this.renderTextField}
                          type="email"
                          label="ایمیل"
                          inputProps={{
                              style: {
                                  direction: 'ltr',
                              }
                          }}
                          required
                      />
                  </div>

                  <div style={{
                      margin: '10px auto',
                  }}>
                      <Field
                          fullWidth={true}
                          name="username"
                          component={this.renderTextField}
                          type="text"
                          label="نام کاربری"
                          inputProps={{
                              style: {
                                  direction: 'ltr',
                              }
                          }}
                          required
                      />
                  </div>

                  <div style={{
                      margin: '10px auto',
                  }}>
                      <Field
                          fullWidth={true}
                          name="password"
                          component={this.renderTextField}
                          type="password"
                          label="رمز عبور"
                          inputProps={{
                              style: {
                                  direction: 'ltr',
                              }
                          }}
                          required
                          />
                  </div>

                  <div style={{
                      margin: '10px auto',
                  }}>
                      <Field
                          fullWidth={true}
                          name="studentNum"
                          component={this.renderTextField}
                          type="number"
                          label="شماره‌ی دانش‌جویی"
                          inputProps={{
                            style: {
                                direction: 'ltr',
                            }
                          }}
                          />
                  </div>
                  {/* <div>
                    {!!this.props.auth.errorMessage && this.props.auth.errorMessage.username.map((error, i) => {
                    return(
                        <li key={i}>
                        {error}
                        </li>
                    );
                    })}
                  </div> */}
                  <div>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{
                            marginTop: '10px'
                        }}
                        >
                        ثبت‌نام
                    </Button>
                  </div>
              </form>
          </Paper>
      );
  }
}

function validate(values) {
	const errors = {}
	const requiredFields = [
	  'username',
      'password',
      'email'
	]
	requiredFields.forEach(field => {
	  if (!values[field]) {
		errors[field] = 'فیلد ضروری'
	  }
	})
	return errors
}

function mapStateToProps({ auth }) {
	return {auth};
}

export default reduxForm({
    form: 'SignupForm',
     validate
  })(
    connect(mapStateToProps, { signup })(SignupForm)
  );