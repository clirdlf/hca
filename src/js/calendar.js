import { Calendar } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid'

// import bootstrap stylesheets directly from your JS
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!

document.addEventListener('DOMContentLoaded', function() {
	const calendarEl = document.getElementById("calendar");
	const calendar = new Calendar(calendarEl, {
		plugins: [bootstrap5Plugin, dayGridPlugin, googleCalendarPlugin, listPlugin, timeGridPlugin],
		themeSystem: "bootstrap5", // important!
		initialView: "dayGridMonth",
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		googleCalendarApiKey: 'AIzaSyA5W2MDJs9uknQv6Cn4OZ07K-wtvkoqYwE',
		navLinks: true, // can click day/week names to navigate views
		editable: false,
		dayMaxEvents: true,
		eventSources: [
			{
				googleCalendarId: 'c_26af52aacd6118099527e6d8da6725baa71a1b209c5319c7298f5254dd819af7@group.calendar.google.com',
				// color: '#2778c8'
				color: '#49a18f'
			}
		]
	});

	calendar.render();
})

