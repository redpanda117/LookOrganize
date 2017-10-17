import React from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); 

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);

const Calendar = props => (
  <div>
    <BigCalendar
      {...this.props}
      views={allViews}
      events={myEventsList}
    />
  </div>
);

export default Calendar;