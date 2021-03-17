import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
        myCourses: [
            { id: 0, subject: 'Self-Advocacy in an Online Work Setting', prof:'Praise Lam', 
                announcements: [
                {
                    id: 0,
                    poster: 'Jan Belmonte',
                    time: '13h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 1,
                    poster: 'Jan Belmonte',
                    time: '20h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                }],
                modules: [
                    {
                        id: 0,
                        title: 'Module 0',
                        parts: [
                            {
                                id: 0,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: true
                            },
                            {
                                id: 1,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: true
                            },
                            {
                                id: 2,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: false
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: 'Module 1',
                        parts: [
                            {
                                id: 0,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: true
                            },
                            {
                                id: 1,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: true
                            },
                            {
                                id: 2,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: false
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Module 2',
                        parts: [
                            {
                                id: 0,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: true
                            },
                        ]
                    }
                ] 
            },
            { id: 1, subject: 'How to Start Your Own Business', prof:'Lorem Ipsum', 
                announcements: [
                {
                    id: 0,
                    poster: 'Jan Belmonte',
                    time: '13h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 1,
                    poster: 'Jan Belmonte',
                    time: '20h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                }],
                modules:[] 
            },
            { id: 2, subject: 'Graphic Design is My Passion', prof:'Lorem Ipsum', 
                announcements: [
                {
                    id: 0,
                    poster: 'Jan Belmonte',
                    time: '13h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 1,
                    poster: 'Jan Belmonte',
                    time: '20h',
                    title: 'Title of Announcement',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                }],
                modules:[]  
            },
            ],
            myInternships: [
            { id: 0, subject: 'Booky', prof:'Daryll Santillan' },
            { id: 1, subject: 'Shopee', prof:'Lorem Ipsum' },
            { id: 2, subject: '808 Studio', prof:'Lorem Ipsum' },
            ],
            allCourses: [
            { id: 0, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 1, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            { id: 4, subject: 'Lorem Ipsum', prof:'Lorem Ipsum', length: "6h 30min" },
            ],
            allInternships: [
            { id: 0, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 1, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 2, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 3, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            { id: 4, subject: 'Lorem Ipsum', prof:'Lorem Ipsum' },
            ],
    }
  }
})