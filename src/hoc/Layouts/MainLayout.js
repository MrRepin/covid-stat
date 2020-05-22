import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { clearCountryError } from '../../store/actions/countryActions'
import { clearCountryListError } from '../../store/actions/countryListActions'

import Header from '../../components/Header/Header'
import DefaultAlert from '../../components/UI/Alerts/DefaultAlert'
import DefaultModal from '../../components/UI/Modals/DefaultModal'
import Navigation from '../../components/Navigation/Navigation'

class MainLayout extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            modalText: [
                'This app provides an easy way to discover statistics on COVID-19 spread in the world',
                'Statistics provided in the app may differ from the real ones',
                'Statistics and Covid-19 API brought by https://covid19api.com/',
                'Articles and Articles API brought by https://jsonplaceholder.typicode.com/',
            ],
            modal: false
        }
    }

    hideAlert = () => {
        if(this.props.getCountryError.status === true) {
            this.props.clearCountryError()
        }
        if(this.props.getCountryListError.status === true) {
            this.props.clearCountryListError()
        }
    }

    changeStateModal = () => {
        const newStateModal = !this.state.modal
        this.setState({
            modal: newStateModal
        })
    }

    render() {
        let error = ''
        if(this.props.getCountryError.status === true) {
            error = this.props.getCountryError
        }
        if(this.props.getCountryListError.status === true) {
            error = this.props.getCountryListError
        }
        return (
            <div className="MainLayout">
                <Header changeStateModal={this.changeStateModal} />
                <main>
                    {this.props.children}
                </main>
                <DefaultAlert
                    {...error}
                    hideAlert={this.hideAlert}
                />
                {
                    this.state.modal
                    ?
                    <DefaultModal changeStateModal={this.changeStateModal}>
                        {this.state.modalText}
                    </DefaultModal>
                    :
                    ''
                }
                <Navigation />
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        getCountryError: state.country.error,
        getCountryListError: state.countryList.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearCountryError: () => dispatch(clearCountryError()),
        clearCountryListError: () => dispatch(clearCountryListError())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout))