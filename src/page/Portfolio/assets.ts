import ps11 from '../../assets/images/project/software/1-1.png'
import ps12 from '../../assets/images/project/software/1-2.png'
import ps13 from '../../assets/images/project/software/1-3.png'
import ps14 from '../../assets/images/project/software/1-4.png'
import ps21 from '../../assets/images/project/software/2-1.png'
import ps22 from '../../assets/images/project/software/2-2.png'
import ps31 from '../../assets/images/project/software/3-1.png'
import ps32 from '../../assets/images/project/software/3-2.png'
import ps33 from '../../assets/images/project/software/3-3.png'
import ps34 from '../../assets/images/project/software/3-4.png'
import ps41 from '../../assets/images/project/software/4-1.png'
import ps42 from '../../assets/images/project/software/4-2.png'
import ps43 from '../../assets/images/project/software/4-3.png'
import ps44 from '../../assets/images/project/software/4-4.png'
import ps51 from '../../assets/images/project/software/5-1.png'
import ps52 from '../../assets/images/project/software/5-2.png'
import ps53 from '../../assets/images/project/software/5-3.png'
import ps54 from '../../assets/images/project/software/5-4.png'
import ps55 from '../../assets/images/project/software/5-5.png'
import ps56 from '../../assets/images/project/software/5-6.png'
import ps61 from '../../assets/images/project/software/6-1.png'
import ps62 from '../../assets/images/project/software/6-2.png'
import ps63 from '../../assets/images/project/software/6-3.png'

import ph11 from '../../assets/images/project/hardware/1-1.jpg'
import ph12 from '../../assets/images/project/hardware/1-2.jpg'
import ph13 from '../../assets/images/project/hardware/1-3.jpg'
import ph14 from '../../assets/images/project/hardware/1-4.jpg'
import ph21 from '../../assets/images/project/hardware/2-1.jpg'
import ph31 from '../../assets/images/project/hardware/3-1.jpg'
import ph32 from '../../assets/images/project/hardware/3-2.jpg'
import ph33 from '../../assets/images/project/hardware/3-3.jpg'
import ph41 from '../../assets/images/project/hardware/4-1.jpg'
import ph51 from '../../assets/images/project/hardware/5-1.jpg'

import reactIcon from '../../logo.svg'
const laravel = {
    url:"https://laravel.com",
    image:"https://laravel.com/img/logomark.min.svg"
}
const nodejs =   {
    url:"https://nodejs.org",
    image:"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
}
const mysql =  {
    url:"https://mysql.com",
    image:"https://www.mysql.com/common/logos/logo-mysql-170x115.png"
}
const react = {
    url:"https://reactjs.org",
    image:reactIcon
}
const reactNative = {
    url:"https://reactnative.dev",
    image:reactIcon
}
const ci = {
    url:"https://codeigniter.com/",
    image:"https://cdn.freebiesupply.com/logos/large/2x/codeigniter-logo-svg-vector.svg"
}

export const software = {
    p1:{
        image:[ps11,ps12,ps13,ps14],
        detail:["A web based application that connected to multiple IOT Device which has an Executive Summary, showing sensor value, showing device location on a map, and many more.","This project using node JS for retrieving data from the device and also as a backend for accessing database and Laravel blade template engine for create the front end web based application"],
        framework:[laravel,nodejs,mysql]
    },
    p2:{
        image:[ps21,ps22],
        detail:["A simple react single page application to create fast and responsive User Interface for IOT Device with single board computer based device"],
        framework:[react,nodejs],
    },
    p3:{
        image:[ps31,ps32,ps33,ps34],
        detail:["An interactive Trouble Ticket System used by client with site based service. This application has an executive dashboard and trouble ticket itself. Helping the client by give a compact one stop application to monitor their operational and maintenance needs"],
        framework:[ci,nodejs]
    },
    p4:{
        image:[ps41,ps42,ps43,ps44],
        detail:["A web based project management aplication to monitor the progress timeline for a project. Showing a summary, controling and monitoring the detail for every sub-project process that can be accessed everywhere whitin a web based application"],
        framework:[ci,nodejs],
    },
    p5:{
        image:[ps51,ps52,ps53],
        detail:["A mobile application to handle for School which has a pick up queue sytem. The application connect the parents of student, teacher, and also other staff. Handling a pickup request from the parents and a Real-time notification feature based on realtime even drived by user"],
        framework:[reactNative],
    },
    p6:{
        image:[ps61,ps62,ps63],
        detail:["Admin Dashboard application for online school pickup system. Show recent activities on the users, handle Data visualization, CRUD system for user information, etc."],
        framework:[react],
    },
}

export const hardware = {
    p1:{
        image:[ph11,ph12,ph13,ph14],
        detail:["A floating platform (Buoy) which has 10 Sensor that measure water quality and air quality around the device. Supporting NB-IoT and up to 4G connection for communication. Also underwater camera support for the latest version"]
    },
    p2:{
        image:[ph21],
        detail:["A long range communication usually used in rural area, the connection is up to 20km. Targeting for sensor located on rural site which has no GSM support. Plug and play device with Serial Communication and Ethernet protocol"]
    },
    p3:{
        image:[ph31,ph32,ph33],
        detail:["A wearable, portable, and compact device that helping people to prevent COVID 19 virus threat by remind the user to keep social distancing rule. This device will ring the alarm when you are too close with other person that wearing the same device"]
    },
    p4:{
        image:[ph41],
        detail:["A smart air purifier, sterilize the air using UV-C ray, filtering using HEPA Filter and Ionizing the air to make the air more fresh and kill the virus also bactery on the air"]
    },
    p5:{
        image:[ph51],
        detail:["A smart weapon storage with high security system. Using iris scanner and fingerprint for user who want to accessing the storage."]
    }
}