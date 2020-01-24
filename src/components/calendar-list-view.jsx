import React from 'react';

import FullCalendar from "@fullcalendar/react";
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import idLocale from '@fullcalendar/core/locales/id';

export default class extends React.Component {
  calendarRef = React.createRef();

  constructor(props) {
    super(props);
  }

  refreshCalendar(done) {
    let calendarApi = this.calendarRef.current.getApi();
    setTimeout(() => {
      calendarApi.refetchEvents();
      done();
    }, 1000);
  };

  sanitizeEvent(eventData) {
    eventData.url = "#";
    return eventData;
  };

  render() {
    return (
      <FullCalendar
        ref={this.calendarRef}
        themeSystem='bootstrap'
        header={false}
        contentHeight="auto"
        heigth="auto"
        displayEventTime={false}
        defaultView="listMonth"
        locales={[idLocale]}
        locale="id"
        plugins={[ listPlugin, googleCalendarPlugin, interactionPlugin, bootstrapPlugin ]}
        googleCalendarApiKey='AIzaSyB02gifJqDWwSxRguO8utQRev6rje2q6I8'
        events='sekum.riskaorid@gmail.com'
        eventDataTransform={(eventData) => this.sanitizeEvent(eventData)}
      />
    )
  }
}
