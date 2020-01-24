import React from 'react';
import {Page, Navbar, Block, BlockTitle} from 'framework7-react';
import CalendarListView from "../components/calendar-list-view";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }
  render() {
    return (
      <Page name="upcoming">
        <Navbar themeDark title="eCalendar"/>

        <BlockTitle medium><h2 className="text-align-center">Agenda Terdekat</h2></BlockTitle>
        <Block>
          <CalendarListView/>
        </Block>
      </Page>
    );
  }
}
