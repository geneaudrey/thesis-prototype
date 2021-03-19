import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
        sidebarActive1: 0,
        sidebarActive2: 0,
        myCourses: [
            { id: 0, subject: 'Self-Advocacy & Work for PWDs', prof:'Praise Lam', 
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
                                status: 2,
                                sections: [
                                    {
                                        id: 0, 
                                        title: 'The standard Lorem Ipsum passage, used since the 1500s',
                                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                    },
                                    {
                                        id: 1, 
                                        title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero ',
                                        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                                    }
                                ]
                            },
                            {
                                id: 1,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 1
                            },
                            {
                                id: 2,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 0
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
                                status: 2
                            },
                            {
                                id: 1,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 1
                            },
                            {
                                id: 2,
                                title: 'Lorem Ipsum',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 0
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
                                status: 2
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
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
  },
  mutations: {
    sidebarActive1(state, index) {
      // mutate state
      state.sidebarActive1 = index;
    }
  },
  actions: {
    sidebarActive1 ({commit}, index) {
      commit('sidebarActive1', index);
      console.log('ey??')
    }
  }
})