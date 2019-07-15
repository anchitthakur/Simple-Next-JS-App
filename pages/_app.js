import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import {Provider} from 'react-redux'

class MyApp extends App {
    componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .catch(err => console.error("Service worker registration failed", err))
        } else {
            console.log("Service worker not supported");
        }
    };

    render() {
        const {Component, pageProps, reduxStore} = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)