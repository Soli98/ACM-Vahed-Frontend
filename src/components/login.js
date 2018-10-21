import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/user_actions';
import { Field, reduxForm } from 'redux-form';
import { Paper, Button, TextField, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Lock from '@material-ui/icons/Lock';

export class LoginForm extends Component {
	renderTextField({
		input,
		label,
		meta: { touched, error },
		...custom
	  }) {
      return (
        <div>
          <Grid container spacing={16} alignItems="flex-end">
            <Grid item xs={1}>
              { custom.type === "text" ?
                <AccountCircle />
                : custom.type === "password" ? <Lock /> : null
              }
            </Grid>
            <Grid item xs={11}>
              <TextField
                fullWidth={true}
                label={label}
                helperText={touched && error}
                error={touched && !!error}
                {...input}
                {...custom}
              />
            </Grid>
          </Grid>
        </div>
		)
	}

	onSubmit(values) {
		this.props.login(values, () => {
      this.props.history.push('/curriculum');
    });
	}

	render() {
		if(this.props.auth.user) {
			return <Redirect to='/curriculum' />;
		}
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
						ورود کاربر
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
          <div>
            {this.props.auth.errorMessage}
          </div>
					<div>
						<Button
							fullWidth={true}
							disabled={this.props.auth.isAuthenticating}
							variant="contained"
							color="primary"
							type="submit"
							style={{
								marginTop: '10px'
							}}
							>
							{this.props.auth.isAuthenticating ? "در حال ورود" : "ورود"}
						</Button>
						<Button
							fullWidth={true}
							component={Link}
							to="/signup"
							variant="contained"
							color="secondary"
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

function mapStateToProps({ auth }, ownProps) {
	return {auth};
}

function validate(values) {
	const errors = {}
	const requiredFields = [
	  'username',
	  'password',
	]
	requiredFields.forEach(field => {
	  if (!values[field]) {
		errors[field] = 'فیلد ضروری'
	  }
	})
	return errors
}

export default reduxForm({
	form: 'LoginForm',
	validate
  })(
	connect(mapStateToProps, { login })(LoginForm)
);