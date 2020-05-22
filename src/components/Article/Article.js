import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { getArticle } from '../../store/actions/newsActions'
import BackButton from '../../components/UI/Buttons/BackButton'
import DefaultPreloader from '../../components/UI/Preloaders/DefaultPreloader'

import './Article.sass'

class Article extends React.Component {

    componentDidMount() {
        this.props.getArticle(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.article}`)
    }

    render() {
        return (
            <div className="article">
                <div className="articleContent">
                    <div className='headerMiddle'>
                        <BackButton link='/news' />
                        {
                            this.props.article.id
                            ?
                            <h2 className='headerTitle'>Article-{this.props.article.id}</h2>
                            :
                            ''
                        }
                    </div>
                    {
                        this.props.article.id
                        ?
                        <p className="text">{this.props.article.body}</p>
                        :
                        <DefaultPreloader />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.news.article
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticle: (url) => dispatch(getArticle(url)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article))