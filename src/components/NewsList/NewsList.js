import React from 'react'
import { Transition } from 'react-transition-group'
import { connect } from 'react-redux'

import NewsCard from '../../components/UI/Cards/NewsCard'
import DefaultPreloader from '../../components/UI/Preloaders/DefaultPreloader'

import { getNewsList } from '../../store/actions/newsActions'

import './NewsList.sass'

class NewsList extends React.Component {

    componentDidMount() {
        this.props.getNewsList()
    }

    render() {
        return (
            <div className="newsList">
                {
                    this.props.newsList
                    ?
                    this.props.newsList.map(item =>
                        <Transition
                            in={true}
                            timeout={0}
                            key={item.id}
                        >
                            {
                                state =>
                                <NewsCard
                                    {...item}
                                    state={state}
                                />
                            }
                        </Transition>
                    )
                    :
                    <DefaultPreloader />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newsList: state.news.newsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewsList: () => dispatch(getNewsList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)