import React, { useState } from "react";
import houseData from '../../house-data.json';

global.USERNAME = '';
global.LOCATION = '';
global.DISTANCE = 0;
global.BIO = 'add a bio';
global.TAGS = [];
global.HOUSES = [];
global.OWNEDHOUSES = [];
global.NOTIFCOUNT = 0;
global.SONGS = [];
global.JUSTJOINEDHOUSE = '';
global.COUNTCREATE = 0;

global.HOUSEDATA = [
    {
        "key": 0,
        "houseName": "sf voguers", 
        "color": "yellow",
        "headerColor": "#FDC765",
        "profileImg": "houseProfileImg.jpg",
        "userJoined": false, 
        "userOwner": false,
        "location": "San Francisco, CA", 
        "address": "123 Duck Walk Way, San Francisco, CA 94110",
        "map": "duck-walkway.png",
        "milesAway": 15, 
        "tags":  [
            "lgbtq+", 
            "newbies",
            "vogue"
        ], 
        "about": "we are a group of friends that usually dance in ODC dance commons in san francisco! we love voguing and welcome dancers of all levels to join our community.",
        "events": [
            {
                "eventIndex": 0,
                "eventName": "vogue I",
                "userRSVP": false,
                "eventAddress": "351 Shotwell St, San Francisco, CA 94110", 
                "eventDate": "12/19/2022",
                "eventStartTime": "7 PM PST",
                "eventAbout": "beginner voguing class for new dancers! come learn the basics with us!"
            },
            {
                "eventIndex": 1,
                "eventName": "VIBE tickets",
                "userRSVP": false,
                "eventAddress": "123 Vibe Street, San Francisco, CA 94110",
                "eventDate": "12/1/2022",
                "eventStartTime": "9 PM PST", 
                "eventAbout": "tickets to VIBE dance competition on 2/26/2023 are dropping soon! come watch the show with us so remember to get your tickets in time!"
            }
        ],
        "members": [
            "Annabelle W.", 
            "Nali W.", 
            "Jeff W."
        ],
        "moderators": [
            "Annabelle W."
        ]
    }, 
    {
        "key": 1,
        "houseName": "oakland boba bash", 
        "color": "pink",
        "headerColor": "#ffa6c1",
        "profileImg": "houseProfileImg.jpg",
        "userJoined": false, 
        "userOwner": false,
        "location": "Oakland, CA", 
        "address": "580 14th St, Oakland, CA 94612",
        "milesAway": 9, 
        "tags":  [
            "hanging out", 
            "making friends",
            "freestyle"
        ], 
        "about": "we are a group of casual dancers at In The Groove Studios that love drinking boba! we host boba runs on us on the last saturday of every month so if you wanna meet some new dancers and drink boba on the house, come join!",
        "events": [
            {
                "eventIndex": 0,
                "eventName": "newbie boba bash (december 2022) @ i-Tea",
                "userRSVP": false,
                "eventAddress": "388 9th St #125a, Oakland, CA 94607", 
                "eventDate": "12/31/2022",
                "eventStartTime": "7 PM PST",
                "eventAbout": "boba run welcoming all our new members of december 2022!"
            },
            {
                "eventIndex": 1,
                "eventName": "newbie boba bash (jan 2022) @ i-Tea",
                "userRSVP": false,
                "eventAddress": "388 9th St #125a, Oakland, CA 94607", 
                "eventDate": "01/28/2023",
                "eventStartTime": "7 PM PST",
                "eventAbout": "boba run welcoming all our new members of january 2023!"
            }
        ],
        "members": [
            "Jeff W.", 
            "Hammy O.",
            "Caroline Z."
        ],
        "moderators": [
            "Jeff W."
        ]
    },
    {
        "key": 2,
        "houseName": "rae class community", 
        "color": "mint",
        "headerColor": "#8de3cd",
        "profileImg": "houseProfileImg.jpg",
        "userJoined": false, 
        "userOwner": false,
        "location": "San Francisco, CA", 
        "address": "414 Mason St #705, San Francisco, CA 94102",
        "milesAway": 21, 
        "tags":  [
            "studio"
        ], 
        "about": "we are a community of dancers at rae studios in sf that frequent the studio! if you'd like to see a familiar face or try out a new class you've been eyeing, join our house to meet others!",
        "events": [
            {
                "eventIndex": 0,
                "eventName": "jumps and turns with madelin braun",
                "userRSVP": false,
                "eventAddress": "388 9th St #125a, Oakland, CA 94607", 
                "eventDate": "12/16/2022",
                "eventStartTime": "5:30 PM PST",
                "eventAbout": "open to all levels!"
            }
        ],
        "members": [
            "Izzy L.", 
            "Michael W.", 
            "Annabelle W."
        ],
        "moderators": [
            "Izzy L."
        ]
    },
    {
        "key": 3,
        "houseName": "stanford + san jose poppers", 
        "color": "yellow",
        "headerColor": "#FDC765",
        "profileImg": "houseProfileImg.jpg",
        "userJoined": false, 
        "userOwner": false,
        "location": "Palo Alto, CA", 
        "address": "726 Serra St, Stanford, CA 94305",
        "milesAway": 5,
        "tags":  [
            "popping",
            "freestyle"
        ], 
        "about": "we're a community based at stanford of mostly students that often travel to san jose for studio classes, usually weekly! we love a variety of styles, especially popping.",
        "events": [
            {
                "eventIndex": 0,
                "eventName": "weekly popping class",
                "userRSVP": false,
                "eventAddress": "422 N Capitol Ave, San Jose, CA 95133", 
                "eventDate": "12/21/2022",
                "eventStartTime": "7:30 PM PST",
                "eventAbout": "we're going to on one studios for the popping foundations class with SwitchVilla! please rsvp at least 3 days beforehand so we can coordinate travel."
            },
            {
                "eventIndex": 1,
                "eventName": "freestyle sesh in 6th floor evgr c wellness room",
                "userRSVP": false,
                "eventAddress": "726 Serra St, Stanford, CA 94305", 
                "eventDate": "12/15/2022",
                "eventStartTime": "10 PM PST",
                "eventAbout": "nightly sesh to get the edge off #swag #finalsareover"
            }
        ],
        "members": [
            "Michael W.",
            "Nali W.", 
            "Izzy L."
        ],
        "moderators": [
            "Michael W."
        ]
    }
];

//export default UserInfo;

//export {USERNAME, LOCATION, DISTANCE, TAGS};