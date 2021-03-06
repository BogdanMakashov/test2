import React, { Component } from 'react'
import { connect } from 'react-redux'

import { User } from '../../components/User/User.js'
import { Page } from '../../components/Page/Page.js'
import { setYear } from '../../actions/PageActions'

import './App.css'

class App extends Component {
    render() {
        const { user, page, setYearAction } = this.props;
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <User name={ user.name }/>
                <Page photos={ page.photos } year={ page.year } setYearAction={setYearAction}/>
            </div>
        )
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page
    }
};

const mapDispatchToProps = dispath => ({
    setYearAction: year => dispath(setYear(year))
});


// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);