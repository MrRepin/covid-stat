import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import EmptyLayout from '../../hoc/Layouts/EmptyLayout'
import LoginForm from '../../components/UI/Forms/LoginForm'
import Container from '../../components/UI/Containers/Container'

import { login } from '../../store/actions/loginActions'

import './Login.sass'

class Login extends React.Component {

    componentDidUpdate() {
        if(this.props.loginStatus === true) {
            this.props.history.push('/')
        }
    }

    auth(e) {
        e.preventDefault()
        this.props.login()
    }

    render() {
        return (
            <EmptyLayout>
                <div className="login">
                    <Container>
                        <LoginForm func={this.auth.bind(this)} />
                    </Container>
                </div>
            </EmptyLayout>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginStatus: state.login.login,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (status) => dispatch(login(status))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))