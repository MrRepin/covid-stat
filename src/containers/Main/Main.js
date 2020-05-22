import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import { AiOutlineReload } from 'react-icons/ai'

import MainLayout from '../../hoc/Layouts/MainLayout'
import CityCard from '../../components/UI/Cards/CityCard'
import MoreButton from '../../components/UI/Buttons/MoreButton'
import DefaultPreloader from '../../components/UI/Preloaders/DefaultPreloader'
import Container from '../../components/UI/Containers/Container'
import SearchForm from '../../components/UI/Forms/SearchForm'

import { getCountryList } from '../../store/actions/countryListActions'

import './Main.sass'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            limit: 8,
            in: false,
            searchList: [],
        }
    }

    changeLimit = () => {
        const limit = this.state.limit + 8
        this.setState({limit})
    }

    changeData(e) {
        const country = e.target.value
        const reg = new RegExp(country, 'gi')
        let searchList = []
        if(country.length < 2) {
            searchList = []
            this.setState({searchList})
            return
        }
        searchList = this.props.countryList.filter(item => item.Country.match(reg))
        this.setState({
            country,
            searchList
        })
    }

    clearSearchInfo = (e) => {
        e.preventDefault()
        this.setState({
            country: '',
            searchList: []
        })
        this.props.history.push(e.target.dataset.location)
    }

    componentDidMount() {
        if(this.props.countryList.length <= 0) this.props.getCountryList()
        this.setState({
            in: true
        })
    }

    render() {
        return (
            <MainLayout>
                <div className="mainPage">
                    <Container>
                        <SearchForm
                            placeholder='Enter country name'
                            changeData={this.changeData.bind(this)}
                            searchList={this.state.searchList}
                            clearSearchInfo={this.clearSearchInfo.bind(this)}
                        />
                    </Container>
                    <Container>
                        {
                            this.props.countryList.length <= 0
                            ?
                            <DefaultPreloader />
                            :
                            ''
                        }
                        {this.props.countryList.map((item, index) => 
                            index < this.state.limit
                            ?
                            <Transition
                                in={this.state.in}
                                timeout={0}
                                key={index}
                            >
                                {
                                    state =>
                                        <CityCard
                                            {...item}
                                            state={state}
                                        />
                                }
                            </Transition>
                            :
                            ''
                        )}
                        {
                            this.props.countryList.length <= 0
                            ?
                            ''
                            :
                            <MoreButton function={this.changeLimit}>
                                <AiOutlineReload />
                                Show more
                            </MoreButton>
                        }
                    </Container>
                </div>
            </MainLayout>
        )
    }

}

function mapStateToProps(state) {
    return {
        countryList: state.countryList.countryList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountryList: () => dispatch(getCountryList()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))