import timeTracking from './assests/timeTracking.svg'
import productivity from './assests/productivity.svg'
import taskManagment from './assests/taskManagment.svg'
import communication from './assests/communication.svg'
import hrTools from './assests/hrTools.svg'
import reports from './assests/reports.svg'
import contentImage from './assests/contentImage.svg'

export const data = [
    {
        title:"Time Tracking with Screenshots",
        logo:timeTracking,
        info:"Track the time your employees spend on work and get detailed information",
        opportunities:[
            "4 Screenshot Modes",
            "Idle Time Tracking",
            "Synchronized Tracking",
            "Billable Hours"
        ],
        image:contentImage
    },
    {
        title:"Productivity Monitoring",
        logo: productivity,
        info:"See how productive your employees are and make sure they dont burnout",
        opportunities:[
           "App and Website Usage Tracking",
            "Activity Level Tracking",
            "Productivity Reports",
            "Work and Life Balance Popups"
        ],
        image:contentImage
    },
    {
        title:"Task Management",
        logo: taskManagment,
        info:"Assign, manage and work width tasks on Task Management system",
        opportunities:[
            "Create Tasks and Projects",
            "Set Deadlines",
            "Attach Files ",
            "Customize Status Tags ",
            "Create Subtasks"
        ],
        image:contentImage
    },
    {
        title:"Communication Channels",
        logo: communication,
        info:"Communicate width your team without leaving WebWork Time Tracker",
        opportunities:[
            "Team Chat",
            "Team Chat Mobile App",
            "Video calls(beta)",
            "Whiteboard"
        ],
        image:contentImage
    },
    {
        title:"HR Tools",
        logo:hrTools,
        info:"Keep your workspace organized with the help of HR tools",
        opportunities:[
            "Attendance Monitoring and Management",
            "Time off Requests",
            "Leave and Holiday Management"
        ],
        image:contentImage
    },
    {
        title:"Online Reports",
        logo:reports,
        info:"Get detailed reports with all the tracked information",
        opportunities:[
            "Timesheet",
            "Statistics",
            "Activity level",
            "Tasks",
            "Geolocation"
        ],
        image:contentImage
    }
]