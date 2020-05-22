import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import Country from './containers/Statistic/Country'
import Main from './containers/Main/Main'
import News from './containers/News/News'
import About from './containers/About/About'
import Login from './containers/Login/Login'

import './assets/sass/App.sass';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/'>
                        {!this.props.login ? <Redirect to="/login" /> : <Main />}
                    </Route>
                    <Route path='/country'>
                        {!this.props.login ? <Redirect to="/login" /> : <Country />}
                    </Route>
                    <Route path='/news'>
                        {!this.props.login ? <Redirect to="/login" /> : <News />}
                    </Route>
                    <Route path='/about'>
                        {!this.props.login ? <Redirect to="/login" /> : <About />}
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
    }
}

export default connect(mapStateToProps)(App)
