import React from 'react';
import {
  App,
  Views,
  View,
  Toolbar,
  Link,
} from 'framework7-react';

import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        // App name
        name: 'riska-ecalendar',
        // App theme
        theme: 'ios',
        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
      },
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >

        <Views tabs className="safe-areas">
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-calendar" tabLinkActive iconIos="f7:calendar" iconAurora="f7:calendar" iconMd="material:calendar" text="Kalender" />
            <Link tabLink="#view-upcoming" iconIos="f7:square_list_fill" iconAurora="f7:square_list_fill" iconMd="material:view_list" text="Agenda Terdekat" />
          </Toolbar>

          <View id="view-calendar" tab tabActive url="/" main/>
          <View id="view-upcoming" tab url="/upcoming/" />
        </Views>
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}
