import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import MainLayout from '../../hoc/Layouts/MainLayout'
import Article from '../../components/Article/Article'
import NewsList from '../../components/NewsList/NewsList'
import Container from '../../components/UI/Containers/Container'

class News extends React.Component {
    render() {
        return (
            <MainLayout>
                <div className="newsPage">
                    <Container>
                        <Switch>
                            <Route exact path={this.props.match.path}>
                                <NewsList />
                            </Route>
                            <Route path={`${this.props.match.path}/:article`}>
                                <Article />
                            </Route>
                            <Route path='*'>
                                <Redirect to='/' />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </MainLayout>
        )
    }
}

export default withRouter(News)