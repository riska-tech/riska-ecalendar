import React from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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

  selectDate(info) {
    let calendarApi = this.calendarRef.current.getApi();
    let selectedDate = info.date.toLocaleDateString();
    let events = [];
    let selectedDateStr = info.date.toLocaleDateString("id-ID", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    let allEvents = calendarApi.getEvents();

    allEvents.forEach((item) => {
      if (item.end.toLocaleTimeString() !== '0:00:00 AM' && (item.start.toLocaleDateString() === selectedDate || item.end.toLocaleDateString() === selectedDate)) {
        let eventTitle = item.title;
        let evenSubtitle = '';
        let pattern = /^\[(.+)](.+)/i;
        if (pattern.test(eventTitle)) {
          let splittedTitle = pattern.exec(eventTitle);
          eventTitle = splittedTitle[2].trim();
          evenSubtitle = splittedTitle[1].trim();
        }
        events.push({
          id: item.id,
          title: eventTitle,
          subtitle: evenSubtitle,
          description: item.extendedProps.description
        });
      }
    });

    this.props.detailViewHandler({
      date: selectedDateStr,
      events: events
    });
  };

  selectEvent(info) {
    let calendarApi = this.calendarRef.current.getApi();
    let selectedDate = info.event.start.toLocaleDateString();
    let events = [];
    let selectedDateStr = info.event.start.toLocaleDateString("id-ID", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    let allEvents = calendarApi.getEvents();

    allEvents.forEach((item) => {
      if (item.end.toLocaleTimeString() !== '0:00:00 AM' && (item.start.toLocaleDateString() === selectedDate || item.end.toLocaleDateString() === selectedDate)) {
        let eventTitle = item.title;
        let evenSubtitle = '';
        let pattern = /^\[(.+)](.+)/i;
        if (pattern.test(eventTitle)) {
          let splittedTitle = pattern.exec(eventTitle);
          eventTitle = splittedTitle[2].trim();
          evenSubtitle = splittedTitle[1].trim();
        }
        events.push({
          id: item.id,
          title: eventTitle,
          subtitle: evenSubtitle,
          description: item.extendedProps.description
        });
      }
    });

    this.props.detailViewHandler({
      date: selectedDateStr,
      events: events
    });
  }

  viewDetail(info) {
    let date = info.date;
    let events = [];
    let selectedDateStr = date.toLocaleDateString("id-ID", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    info.segs.forEach((item) => {
      let eventTitle = item.eventRange.def.title;
      let evenSubtitle = '';
      let pattern = /^\[(.+)](.+)/i;
      if (pattern.test(eventTitle)) {
        let splittedTitle = pattern.exec(eventTitle);
        eventTitle = splittedTitle[2].trim();
        evenSubtitle = splittedTitle[1].trim();
      }
      events.push({
        id: item.eventRange.def.defId,
        title: eventTitle,
        subtitle: evenSubtitle,
        description: item.eventRange.def.extendedProps.description
      });
    });

    this.props.detailViewHandler({
      date: selectedDateStr,
      events: events
    });
  }

  sanitizeEvent(eventData) {
    eventData.url = "#";
    return eventData;
  };

  render() {
    return (
      <FullCalendar
        ref={this.calendarRef}
        themeSystem='bootstrap'
        header={{
          left: 'prev',
          center: 'title',
          right: 'next'
        }}
        contentHeight="auto"
        heigth="auto"
        displayEventTime={false}
        eventLimit={true}
        eventLimitText="lagi"
        eventLimitClick={(info) => this.viewDetail(info)}
        dateClick={(info) => this.selectDate(info)}
        eventClick={(info) => this.selectEvent(info)}
        defaultView="dayGridMonth"
        locales={[idLocale]}
        locale="id"
        plugins={[ dayGridPlugin, googleCalendarPlugin, interactionPlugin, bootstrapPlugin ]}
        googleCalendarApiKey='AIzaSyB02gifJqDWwSxRguO8utQRev6rje2q6I8'
        events='sekum.riskaorid@gmail.com'
        eventDataTransform={(eventData) => this.sanitizeEvent(eventData)}
      />
    )
  }
}
