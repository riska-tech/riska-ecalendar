import React from 'react';
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Popup,
} from 'framework7-react';

import CalendarView from '../components/calendar-view';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popupOpened: false,
      eventDetail: {
        date: '',
        events: [],
      },

    };
  }

  reloadPage(done) {
    setTimeout(() => {
      done();
    }, 1000);
  };

  detailViewHandler(eventDetail) {
    this.setState({
      popupOpened : true,
      eventDetail : eventDetail,
    });
  }

  render() {
    return (
      <Page name="home">
        <Navbar themeDark title="eCalendar"/>

        <Block>
          <CalendarView detailViewHandler={(eventDetail) => this.detailViewHandler(eventDetail)}/>
          <Popup opened={this.state.popupOpened} onPopupClosed={() => this.setState({popupOpened : false})} swipeToClose push>
            <Page>
              <Navbar title={this.state.eventDetail.date}/>
              <List mediaList inset>
                {this.state.eventDetail.events.map((event) => {
                  return <ListItem
                    key={event.id}
                    title={event.title}
                    subtitle={event.subtitle}
                    text={event.description}
                    after="" // TODO add time of event
                  />;
                })}
              </List>
            </Page>
          </Popup>
        </Block>

        <BlockTitle>Links</BlockTitle>
        <List>
          <ListItem link="https://bit.ly/Carauploadecalendar" external target="_blank" title="Cara submit ke eCalendar"/>
        </List>
      </Page>
    )
  }
}
