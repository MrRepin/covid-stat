import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import moment from 'moment'
import { Transition } from 'react-transition-group'

import MainLayout from '../../hoc/Layouts/MainLayout'
import DefaultChart from '../../components/UI/Charts/DefaultChart'
import OpacityCard from '../../components/UI/Cards/OpacityCard'
import InlineNav from '../../components/UI/Navigation/InlineNav'
import ColorButton from '../../components/UI/Buttons/ColorButton'
import BackButton from '../../components/UI/Buttons/BackButton'
import Container from '../../components/UI/Containers/Container'

import { getCountry } from '../../store/actions/countryActions'

import './Country.sass'

class Country extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May'
                ],
                datasets: [{
                    data: [100, 200, 300, 500, 2000],
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                }
            },
            rangeNav: [
                {
                    name: 'Confirmed',
                    status: 'active'
                },
                {
                    name: 'Deaths',
                    status: ''
                },
                {
                    name: 'Recovered',
                    status: ''
                }
            ],
            category: 'confirmed',
            buttonColor: '#ff6384',
            in: false
        }

        this.setMonthList = this.setMonthList.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        const prevRangeNav = [...state.rangeNav]
        const data = {...state.data}
        if(props.chartStat[state.category] !== data.datasets[0].data) {
            data.datasets[0].data = props.chartStat[state.category]
        }
        const category = state.category[0].toUpperCase() + state.category.slice(1)
        for(let item of prevRangeNav) {
            if(item.name === category) {
                item.status = 'active'
                continue
            }
            item.status = ''
        }
        return {
            rangeNav: prevRangeNav,
            data
        }
    }

    changeChartData = (e) => {
        const category = e.target.dataset.category.toLowerCase()
        this.setState({
            category
        })
    }

    setMonthList = () => {
        const currentMonth = moment().month()
        const monthInYear = moment.monthsShort()
        const newData = {...this.state.data}
        newData.labels = monthInYear.splice(0, currentMonth + 1)
        this.setState({
            data: newData
        })
    }

    componentDidMount() {
        const country = this.props.location.search.replace(/\?name=/g, '')
        this.props.getCountry(country)
        this.setMonthList()
        this.setState({
            in: true
        })
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <MainLayout>
                <div className='countryPage'>
                    <Container>
                        <div className='headerMiddle'>
                            <BackButton link='/' />
                            <h2 className='headerTitle'>{this.props.country}</h2>
                        </div>
                        <InlineNav classList={'rangeNav headerNav'} >
                            {this.state.rangeNav.map((item, index) => 
                                <ColorButton
                                    {...item}
                                    color={this.state.buttonColor}
                                    key={index}
                                    function={this.changeChartData}
                                >
                                    {item.name}
                                </ColorButton>
                            )}
                        </InlineNav>
                    </Container>
                    <div className='countryStatistic'>
                        <DefaultChart data={this.state.data} options={this.state.options} />
                        <div className='numberStat'>
                            <Container>
                                {this.props.numberStat.map((item, index) =>
                                    <Transition
                                        key={index}
                                        in={this.state.in}
                                        timeout={0}
                                    >
                                        {
                                            state => <OpacityCard {...item} state={state} />
                                        }
                                    </Transition>
                                )}
                            </Container>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

function mapStateToProps(state) {
    return {
        numberStat: state.country.numberStat,
        chartStat: state.country.chartStat,
        country: state.country.country
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCountry: country => dispatch(getCountry(country))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Country))