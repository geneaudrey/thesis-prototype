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
                                title: 'Introduction',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 2,
                                type: 'lesson',
                                lessonNum: 1,
                                body: [
                                    {type: 'p', text: 'Persons with disabilities have faced numerous difficulties, even more so during the pandemic. This is because PWDs are one of the vulnerable groups in society. They are often excluded and denied their human rights. Social exclusion, low educational attainment, unemployment, low self-esteem, and limited opportunities to participate in social and political life are a few of the challenges that they go through, which are effects of disability-based discrimination. Under international treaties, PWDs are entitled to exercise their civil, political, social, economic, and cultural rights on an equal basis with others. The principle of the right to equality is the foundation of the rights of individuals with disabilities (Luna-Narido et. al., 2016).'},
                                    {type: 'p', text: 'One of the reasons behind the discrimination against the PWDs is ableism embedded in able-bodied people’s mindsets. The pervasiveness of ableist ideas and culture revolves around three main rhetoric norms that can be observed throughout history, which is that normal is natural, body is able, and deviance is evil (Cherney, 2011). Due to this mindset, people end up having a negative view towards disabilities and in turn, learn ableism. By having these sorts of perspectives and making it seem that these are unsaid facts, society breeds and sustains systemic ableism. These rhetorics not only affect those who are disabled, but also other groups that are oppressed by such stigmas such as those that are part of the LGBTQA+, those who are considered fat and more. Recognizing and confronting these ableist ideals is not an easy task as it  is very much ingrained into society. However, it is essential to break down the mental framework it has produced that allowed people to create unjust conclusions on  disabilities.'},
                                    {type: 'p', text: 'This is why there is a discussion regarding the importance of self-advocacy. The self-advocacy movement has been around for quite a long time already. It is an idea wherein an individual speaks up for themselves and their interests. It is often used for civil rights movements and for the mutual aid networks for disabled people—and this is where you come into the picture! People with disabilities have the right to choose the services they want.'},
                                    {type: 'p', text: 'As the self advocacy movement grew, self advocacy groups started to pop up. These are groups started by people with disabilities to help teach others how to speak up for themselves and fight for their rights.'},
                                    {type: 'p', text: 'Self advocacy groups are important because they help keep the self advocacy movement going strong! With this, we hope you can have a talk with the coordinator in order to have a more personal connection outside of this course.'},
                                    {type: 'link', text: 'CONNECT WITH THE INSTRUCTOR NOW'}
                                ]
                            },
                            {
                                id: 1, 
                                title: 'What You’ll Learn',
                                desc: 'No description yet',
                                status: 1,
                                type: 'lesson',
                                lessonNum: 2,
                                body: [
                                    {type: 'p', text: 'This course aims to bring together everything that can be learned in self-advocacy groups, how one can find jobs that suit you and more! We hope by the end of the course, you will be able to find a spark and confidence in yourself and know that you are deserving of a job you want.'},
                                    {type: 'listHeader', text: 'In this course, you will learn about:'},
                                    {type: 'list', text: ['What is self advocacy', 
                                                            'The beliefs, values, and principles of the self advocacy', 
                                                            'How to pick issues or goals', 
                                                            'Self determination', 
                                                            'How to write a resume',
                                                            'How to job hunt',
                                                            'How to do your best in front of the interviewer',
                                                            'What to do when you land the job'
                                                        ]
                                    },
                                    {type: 'p', text: 'Now let’s move on to the next module!'}
                                ]
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: 'Module 1',
                        parts: [
                            {
                                id: 0,
                                title: 'What is Self-Advocacy and what can it do for you?',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 2,
                                type: 'lesson',
                                lessonNum: 1,
                                body: [
                                    {type: 'header', text: 'What is Self-Advocacy?'},
                                    {type: 'p', text: 'Self-advocacy is about people with all types of disabilities working for justice and finding confidence in themselves. This will help an individual take charge of their lives. With that, it teaches us how to make decisions and choices that affect our lives. We can be more independent. It teaches us about our rights, but along with learning about our rights, we learn what we have to do. '},
                                    {type: 'p', text: 'The way we learn about advocating is by helping each other gain confidence to speak out for what we believe in. There are many PWDs who are in a similar situation as you are, so don’t feel like you are alone in this problem. We will help you connect with other people who need a little help like you and together, along with this course, you will find a way to advocate for yourself too! We ENABLE you to take charge and see that you are more than just your disability.'},
                                    {type: 'listHeader', text: 'According to People First of Tennessee Self advocacy means...'},
                                    {type: 'list', text: ['Taking responsibility for your life',
                                                            'Learning to ask questions until you can understand what is happening',
                                                            'Learning to solve the problems that stand in the way of doing what you want '
                                                    ]},
                                    {type: 'ref', text: "(People First of Tennessee booklet, Self Advocacy: An Owner's Manual)"}
                                ]
                            },
                            {
                                id: 1,
                                title: 'You Know Yourself the Best',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 1,
                                type: 'discussion',
                                body: [
                                    {type: 'listHeader', text: 'Think about the questions above and answer them to flesh out what you want to get out of this course.'},
                                    {type: 'list', text: ['Why is self-advocacy important and why do you want to be involved?',
                                                            'What are some goals that you want to achieve or work on? ',
                                                            'What are your talents or strengths? ',
                                                            'What are some challenges that you are interested in doing or facing? ',
                                                            'Who are the people you want to work with on your self-advocacy journey? ',
                                                            'How do you want to get involved in your community?',
                                                            'What will help you be more successful?'
                                                    ]},
                                    {type: 'p', text: "Even if you have never done any of these things, you can become a self advocate by getting involved"}
                                ]
                            },
                            {
                                id: 2,
                                title: 'Beliefs, Values and Principles ',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 0,
                                type: 'lesson',
                                lessonNum: 2,
                                body: [
                                    {type: 'p', text: 'The self advocacy movement is based on beliefs, values, and principles. They include ideas such as:'},
                                    {type: 'list', text: ['We are people first',
                                                            'We have the right to choose the services we want',
                                                            'People with disabilities are entitled to live in the community'
                                                    ]},
                                    {type: 'p', text: "These are just a few examples of the beliefs, values and principles that are important to you. It is important to talk about your beliefs, values, and principles when you have your own self-advocacy group."},
                                    {type: 'p', text: 'By sharing with one another, you are able to understand each other better and will aid you to realize and reach your goals. By finding like-minded people, you will be more likely to motivate yourself in achieving those goals! '},
                                    {type: 'p', text: 'Here are some examples of beliefs and values in certain self-advocacy groups:'},
                                    {type: 'list', text:[ 'People with disabilities should be treated as equals.',
                                                            'People should be given the same decisions, choices, rights, responsibilities, and chances to speak up and empower themselves.',
                                                            'People should be able to make new friendships and renew old friendships just like everyone else.'
                                    ]},
                                    {type: 'listHeader', text: 'On the other hand, examples below are in relation to Principles:'},
                                    {type: 'list', text: [
                                        'Empowerment',
                                        'Equal opportunity',
                                        'Learning and living together',
                                        'Non-labelling'
                                    ]},
                                    {type: 'ref', text: '(Self Advocates Becoming Empowered; Self Advocacy Committee of the Inclusion International, 1996) '}
                                ]
                            },
                            {
                                id: 3,
                                title: 'You Know Yourself the Best',
                                desc: 'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
                                status: 0,
                                type: 'activity',
                                body: [
                                    {type: 'listHeader', text: 'Try this activity with your group.'},
                                    {type: 'list', text: ['Everyone take a moment to work by yourselves and write down what your beliefs, values, and principles are.',
                                                            'Present some points to explain why those are the things you stick to and how important they are',
                                                            'Share what you have written with the rest of your group. If you can, write them on big sheets of paper or on a board. Group together thoughts that are the same.'
                                                    ]},
                                    {type: 'p', text: "Look at your results together. Are there ideas or thoughts that you have in common? These are your shared beliefs, values, and principles. The more you have in common, the easier it is to work with each other. Write some key concepts your group believes here!"},
                                    
                                ]
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
                ],
                upcomingAssignments: [
                    {
                        id: 0,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
                    },
                    {
                        id: 1,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
                    },
                    {
                        id: 2,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
                    }
                ],
                finishedAssignments: [
                    {
                        id: 0,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
                    },
                    {
                        id: 1,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
                    },
                    {
                        id: 2,
                        title: 'Lorem Ipsum Dolor Sit Amet',
                        availableUntil: 'Mar 3 at 11:59pm',
                        deadline: 'Mar 3 at 11:59pm'
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
                modules:[],
                upcomingAssignments: [],
                finishedAssignments: [] 
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
                modules:[],
                upcomingAssignments: [],
                finishedAssignments: []  
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
        { id: 0, company: 'Booky', position:'Marketing Intern', img: "", desc: "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons...", 
            process: {desc: [
                "We want every individual to hone their skills and gain the necessary experiences needed in order to attain their dream jobs. With that being said, each companies listed will have their own hiring process, and we will be aiding you through each step. The features in this site is designed to ensure that you are able to prepare yourself for the application for an internship and give you insights on the job application journey. ",
                "To ensure that everybody who is interested in joining this company has an equal opportunity and ability to start this journey, we did our best tomake our process simple, easy and accessible. If you need a certain accomodation for the applications, please do not hesitate to send a message beforehand at xxx@gmail.com."
            ], steps: ["applications", "assessment", "interviews", "offer"]}
        },
        { id: 1, company: 'Booky', position:'Finance Intern', img: "", desc: "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons...",
            process: {desc: [
                "We want every individual to hone their skills and gain the necessary experiences needed in order to attain their dream jobs. With that being said, each companies listed will have their own hiring process, and we will be aiding you through each step. The features in this site is designed to ensure that you are able to prepare yourself for the application for an internship and give you insights on the job application journey. ",
                "To ensure that everybody who is interested in joining this company has an equal opportunity and ability to start this journey, we did our best tomake our process simple, easy and accessible. If you need a certain accomodation for the applications, please do not hesitate to send a message beforehand at xxx@gmail.com."
            ], steps: ["applications", "assessment", "interviews", "offer"]}
        },
        { id: 2, company: 'Booky', position:'Operations Intern', img: "", desc: "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons..." },
        { id: 3, company: 'Shopee', position:'Features Intern', img: "", desc: "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration..." },
        { id: 4, company: 'Shopee', position:'Communities Intern', img: "", desc: "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration..." },
        { id: 5, company: 'Shopee', position:'HR Intern', img: "", desc: "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration..." },
        { id: 6, company: '808 Studio', position:'Design Intern', img: "", desc: "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat..." },
        { id: 7, company: '808 Studio', position:'Sales Intern', img: "", desc: "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat..." },
        { id: 8, company: '808 Studio', position:'Clients Intern', img: "", desc: "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat..." },
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