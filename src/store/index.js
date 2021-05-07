import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      sidebarActive1: 0,
      sidebarActive2: 0,
      myCourses: [
        {
          id: 0,
          subject: "Self-Advocacy & Work for PWDs",
          prof: "Praise Lam",
          img: "ENABLE UPDATED-34.svg",
          announcements: [
            {
              id: 0,
              poster: "Jan Belmonte",
              time: "13h",
              title: "GROUP DICUSSION",
              body: [
                { type: "p", text: "Good day everyone!" },
                {
                  type: "p",
                  text:
                    "I hope the discussion yesterday was a fruitful one for all of you! If you have any more questions you would like to ask me, please feel free to message me anytime! My DMs are always open :) Have a good rest today and remember to accomplish the following module by the end of the week. ",
                },
                { type: "p", text: "Here is our group photo from earlier! " },
                { type: "img", img: "pektor.png" },
              ],
            },
            {
              id: 1,
              poster: "Jan Belmonte",
              time: "20h",
              title: "FIRST DAY TOGETHER",
              body: [
                { type: "p", text: "Hi everyone!" },
                {
                  type: "p",
                  text:
                    "It was great talking to all of you through the chat earlier. Let us schedule a meeting soon together so we can e-meet each other and learn more about your group also! If you are feeling a little bit shy, do not worry. This site is a safe space for all of you. Let us schedule a when-to-meet through chat regarding our available times. ",
                },
                {
                  type: "p",
                  text:
                    "Have a great day and always remember to enable yourselves to strive more!",
                },
              ],
            },
          ],
          modules: [
            {
              id: 0,
              title: "Module 0",
              parts: [
                {
                  id: 0,
                  title: "Introduction",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: [
                    {
                        type: "img",
                        img: "ENABLE UPDATED-15.svg"
                    },
                    {
                      type: "p",
                      text:
                        "Persons with disabilities have faced numerous difficulties, even more so during the pandemic. This is because PWDs are one of the vulnerable groups in society. They are often excluded and denied their human rights. Social exclusion, low educational attainment, unemployment, low self-esteem, and limited opportunities to participate in social and political life are a few of the challenges that they go through, which are effects of disability-based discrimination. Under international treaties, PWDs are entitled to exercise their civil, political, social, economic, and cultural rights on an equal basis with others. The principle of the right to equality is the foundation of the rights of individuals with disabilities (Luna-Narido et. al., 2016).",
                    },
                    {
                      type: "p",
                      text:
                        "One of the reasons behind the discrimination against the PWDs is ableism embedded in able-bodied people’s mindsets. The pervasiveness of ableist ideas and culture revolves around three main rhetoric norms that can be observed throughout history, which is that normal is natural, body is able, and deviance is evil (Cherney, 2011). Due to this mindset, people end up having a negative view towards disabilities and in turn, learn ableism. By having these sorts of perspectives and making it seem that these are unsaid facts, society breeds and sustains systemic ableism. These rhetorics not only affect those who are disabled, but also other groups that are oppressed by such stigmas such as those that are part of the LGBTQA+, those who are considered fat and more. Recognizing and confronting these ableist ideals is not an easy task as it  is very much ingrained into society. However, it is essential to break down the mental framework it has produced that allowed people to create unjust conclusions on  disabilities.",
                    },
                    {
                      type: "p",
                      text:
                        "This is why there is a discussion regarding the importance of self-advocacy. The self-advocacy movement has been around for quite a long time already. It is an idea wherein an individual speaks up for themselves and their interests. It is often used for civil rights movements and for the mutual aid networks for disabled people—and this is where you come into the picture! People with disabilities have the right to choose the services they want.",
                    },
                    {
                      type: "p",
                      text:
                        "As the self advocacy movement grew, self advocacy groups started to pop up. These are groups started by people with disabilities to help teach others how to speak up for themselves and fight for their rights.",
                    },
                    {
                      type: "p",
                      text:
                        "Self advocacy groups are important because they help keep the self advocacy movement going strong! With this, we hope you can have a talk with the coordinator in order to have a more personal connection outside of this course.",
                    },
                    { type: "link", text: "CONNECT WITH THE INSTRUCTOR NOW" },
                  ],
                },
                {
                  id: 1,
                  title: "What You’ll Learn",
                  desc: "No description yet",
                  status: 1,
                  type: "lesson",
                  lessonNum: 2,
                  body: [
                    {
                      type: "p",
                      text:
                        "This course aims to bring together everything that can be learned in self-advocacy groups, how one can find jobs that suit you and more! We hope by the end of the course, you will be able to find a spark and confidence in yourself and know that you are deserving of a job you want.",
                    },
                    {
                      type: "listHeader",
                      text: "In this course, you will learn about:",
                    },
                    {
                      type: "list",
                      text: [
                        "What is self advocacy",
                        "The beliefs, values, and principles of the self advocacy",
                        "How to pick issues or goals",
                        "Self determination",
                        "How to write a resume",
                        "How to job hunt",
                        "How to do your best in front of the interviewer",
                        "What to do when you land the job",
                      ],
                    },
                    {
                      type: "p",
                      text: "Now let’s move on to the next module!",
                    },
                  ],
                },
              ],
            },
            {
              id: 1,
              title: "Module 1",
              parts: [
                {
                  id: 0,
                  title: "What is Self-Advocacy and what can it do for you?",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: [
                    {
                        type: "img",
                        img: "ENABLE UPDATED-18.svg"
                    },
                    { type: "header", text: "What is Self-Advocacy?" },
                    {
                      type: "p",
                      text:
                        "Self-advocacy is about people with all types of disabilities working for justice and finding confidence in themselves. This will help an individual take charge of their lives. With that, it teaches us how to make decisions and choices that affect our lives. We can be more independent. It teaches us about our rights, but along with learning about our rights, we learn what we have to do. ",
                    },
                    {
                      type: "p",
                      text:
                        "The way we learn about advocating is by helping each other gain confidence to speak out for what we believe in. There are many PWDs who are in a similar situation as you are, so don’t feel like you are alone in this problem. We will help you connect with other people who need a little help like you and together, along with this course, you will find a way to advocate for yourself too! We ENABLE you to take charge and see that you are more than just your disability.",
                    },
                    {
                      type: "listHeader",
                      text:
                        "According to People First of Tennessee Self advocacy means...",
                    },
                    {
                      type: "list",
                      text: [
                        "Taking responsibility for your life",
                        "Learning to ask questions until you can understand what is happening",
                        "Learning to solve the problems that stand in the way of doing what you want ",
                      ],
                    },
                    {
                      type: "ref",
                      text:
                        "(People First of Tennessee booklet, Self Advocacy: An Owner's Manual)",
                    },
                  ],
                },
                {
                  id: 1,
                  title: "You Know Yourself the Best",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 1,
                  type: "discussion",
                  body: [
                    {
                      type: "listHeader",
                      text:
                        "Think about the questions above and answer them to flesh out what you want to get out of this course.",
                    },
                    {
                      type: "list",
                      text: [
                        "Why is self-advocacy important and why do you want to be involved?",
                        "What are some goals that you want to achieve or work on? ",
                        "What are your talents or strengths? ",
                        "What are some challenges that you are interested in doing or facing? ",
                        "Who are the people you want to work with on your self-advocacy journey? ",
                        "How do you want to get involved in your community?",
                        "What will help you be more successful?",
                      ],
                    },
                    {
                      type: "p",
                      text:
                        "Even if you have never done any of these things, you can become a self advocate by getting involved",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Beliefs, Values and Principles ",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 0,
                  type: "lesson",
                  lessonNum: 2,
                  body: [
                    {
                      type: "p",
                      text:
                        "The self advocacy movement is based on beliefs, values, and principles. They include ideas such as:",
                    },
                    {
                      type: "list",
                      text: [
                        "We are people first",
                        "We have the right to choose the services we want",
                        "People with disabilities are entitled to live in the community",
                      ],
                    },
                    {
                      type: "p",
                      text:
                        "These are just a few examples of the beliefs, values and principles that are important to you. It is important to talk about your beliefs, values, and principles when you have your own self-advocacy group.",
                    },
                    {
                      type: "p",
                      text:
                        "By sharing with one another, you are able to understand each other better and will aid you to realize and reach your goals. By finding like-minded people, you will be more likely to motivate yourself in achieving those goals! ",
                    },
                    {
                      type: "p",
                      text:
                        "Here are some examples of beliefs and values in certain self-advocacy groups:",
                    },
                    {
                      type: "list",
                      text: [
                        "People with disabilities should be treated as equals.",
                        "People should be given the same decisions, choices, rights, responsibilities, and chances to speak up and empower themselves.",
                        "People should be able to make new friendships and renew old friendships just like everyone else.",
                      ],
                    },
                    {
                      type: "listHeader",
                      text:
                        "On the other hand, examples below are in relation to Principles:",
                    },
                    {
                      type: "list",
                      text: [
                        "Empowerment",
                        "Equal opportunity",
                        "Learning and living together",
                        "Non-labelling",
                      ],
                    },
                    {
                      type: "ref",
                      text:
                        "(Self Advocates Becoming Empowered; Self Advocacy Committee of the Inclusion International, 1996) ",
                    },
                  ],
                },
                {
                  id: 3,
                  title: "You Know Yourself the Best",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 0,
                  type: "activity",
                  body: [
                    {
                      type: "listHeader",
                      text: "Try this activity with your group.",
                    },
                    {
                      type: "list",
                      text: [
                        "Everyone take a moment to work by yourselves and write down what your beliefs, values, and principles are.",
                        "Present some points to explain why those are the things you stick to and how important they are",
                        "Share what you have written with the rest of your group. If you can, write them on big sheets of paper or on a board. Group together thoughts that are the same.",
                      ],
                    },
                    {
                      type: "p",
                      text:
                        "Look at your results together. Are there ideas or thoughts that you have in common? These are your shared beliefs, values, and principles. The more you have in common, the easier it is to work with each other. Write some key concepts your group believes here!",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: "Module 2",
              parts: [
                {
                  id: 0,
                  title: "Beliefs, Values and Principles",
                  desc:
                    "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: [
                      {
                        type: "img",
                        img: "ENABLE UPDATED-16.svg"
                      },
                      {
                          type: "p",
                          text: "The self advocacy movement is based on beliefs, values, and principles. They include ideas such as:"
                      },
                      {
                        type: "list",
                        text: ["We are people first",
                        "We have the right to choose the services we want",
                        "People with disabilities are entitled to live in the community"
                        ]
                      },
                      {
                        type: "p",
                        text: "These are just a few examples of the beliefs, values and principles that are important to you. It is important to talk about your beliefs, values, and principles when you have your own self-advocacy group."
                      },
                      {
                          type: "p",
                          text: "By sharing with one another, you are able to understand each other better and will aid you to realize and reach your goals. By finding like-minded people, you will be more likely to motivate yourself in achieving those goals! "
                      },
                      {
                          type: "p",
                          text: "Here are some examples of beliefs and values in certain self-advocacy groups:"
                      },
                      {
                          type: "list",
                          text: [
                              "People with disabilities should be treated as equals.",
                              "People should be given the same decisions, choices, rights, responsibilities, and chances to speak up and empower themselves.",
                              "People should be able to make new friendships and renew old friendships just like everyone else."
                          ]
                      },
                      {
                          type: "listHeader",
                          text: "On the other hand, examples below are in relation to Principles: "
                      },
                      {
                          type: "list",
                          text: [
                              "Empowerment",
                              "Equal opportunity",
                              "Learning and living together",
                              "Non-labelling"
                          ]
                      },
                      {
                          type: "ref",
                          text: "(Self Advocates Becoming Empowered; Self Advocacy Committee of the Inclusion International, 1996)"
                      }
                  ]
                },
                {
                    id: 1,
                    title: "You Know Yourself the Best",
                    desc:
                        "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                    status: 3,
                    type: "activity",
                    // lessonNum: 1,
                    body: [
                        {
                            type: "listHeader",
                            text: "Try this activity with your group."
                        },
                        {
                            type: "list",
                            text: [
                                "Take some time to yourself and think about your beliefs, values and principles. Write them down afterwards",
                                "Take note regarding some points regarding the reasons behind it and explain why these are important to you",
                                "Share what you have written with the rest of your group. Discuss it either through a Zoom Call or a chat so that everyone can chime in and group together thoughts that are the same"
                            ]
                        },
                        {
                            type: "p",
                            text: "Look at your results together. Are there ideas or thoughts that you have in common? These are your shared beliefs, values, and principles. The more you have in common, the easier it is to work with each other. Write some key concepts your group believes here!"
                        }
                    ]
                },
              ],
            },
            {
                id: 3,
                title: "Module 3",
                parts: [
                    {
                        id: 0,
                        title: "Your Rights by the Law",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 2,
                        type: "lesson",
                        lessonNum: 1,
                        body: [
                            {
                                type: "img",
                                img: "ENABLE UPDATED-20.svg"
                            },
                            {
                                type: "p",
                                text: "There will be some instances where you may feel belittled or some unfair treatment from other individuals. At times like these, you have to stand for your own rights and practice the self-advocacy lessons you have encountered. With that being said, you are protected by the government through a law called the Magna Carta for Disabled Persons dated from March 24, 1992. What are some specific laws that are applicable then in the workforce and your rights in employment? Here are some specifics that you should take note of:"
                            },
                            {
                                type: "header",
                                text: "TITLE TWO - RIGHTS AND PRIVILEGES OF DISABLED PERSONS"
                            },
                            {
                                type: "p-bold",
                                text: "Chapter 1. Employment"
                            },
                            {
                                type: "section",
                                text: "<span class='paragraphBold'> Section 5. </span> Equal opportunity for employment. No disabled person shall be denied access to opportunities for suitable employment. A qualified disabled employee shall be subject to the same terms and conditions of employment and the same compensation, privileges, benefits, fringe benefits, incentives or allowances as a qualified able bodied person."
                            },
                            {
                                type: "p",
                                text: "Five per cent of all casual, emergency and contractual positions in the Departments of Social Welfare and Development, Health, Education, Culture and Sports, and other government agencies, offices or corporations engaged in social development shall be reserved for disabled persons."
                            },
                            {
                                type: "p-bold",
                                text: "Reflection:"
                            },
                            {
                                type: "p",
                                text: "In this section, this shows that even with your disability, you are entitled to a job opportunity if you are able to get all the qualifications that the company is looking for. The government also mandated a certain number of percentages for certain organizations just for people with disabilities."
                            },
                            {
                                type: "section",
                                text: "<span class='paragraphBold'> Section 7. </span> Apprenticeship. Subject to the provisions of the Labour Code as amended, disabled persons shall be eligible as apprentices or learners: provided that their handicap is not much as to effectively impede the performance of job operations in the particular occupation for which they are hired; provided, further, that after the lapse of the period of apprenticeship if found satisfactory in the job performance, they shall be eligible for employment."
                            },
                            {
                                type: "p-bold",
                                text: "Reflection:"
                            },
                            {
                                type: "in-line-link",
                                text: "Every individual needs the proper job experience so that they may go reach their dream jobs--this includes you! An apprenticeship or internship will help cultivate and hone your skills and prepare you to a full-time job in a department that you want! If you are able to do a great performance during your internship, you may even be recruited by the company as an employee. For internship opportunities available, <a href='#'> you may click here </a>"
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-19.svg"
                            },
                            {
                                type: "header",
                                text: "TITLE THREE – PROHIBITION ON DISCRIMINATION"
                            },
                            {
                                type: "p-bold",
                                text: "Chapter 1. Discrimination on employment"
                            },
                            {
                                type: "section",
                                text: "<span class='paragraphBold'> Section 32. </span> Discrimination on employment. No entity, whether public or private, shall discriminate against a qualified disabled person by reason of disability in regard to job application procedures, the hiring, promotion, or discharge of employees, employee compensation, job training, and other terms, conditions, and privileges of employment. The following constitute acts of discrimination:"
                            },
                            {
                                type: "p",
                                text: "(a) limiting segregating or classifying a disabled job applicant in such a manner that adversely affects his work opportunities;"
                            },
                            {
                                type: "p",
                                text: "(b) using qualification standards, employment tests or other selection criteria that screen out or tend to screen out a disabled person unless such standards, tests or other selection criteria are shown to be job-related for the position in question and are consistent with business necessity;"
                            },
                            {
                                type: "p",
                                text: "(c) utilising standards, criteria, or methods of administration that:"
                            },
                            {
                                type: "listOrdered",
                                text: [
                                    "(1) have the effect of discrimination on the basis of disability; or",
                                    "(2) perpetuate the discrimination of others who are subject to common administrative control;"
                                ]
                            },
                            {
                                type: "p",
                                text: "(d) providing less compensation, such as salary, wage or other forms of remuneration and fringe benefits, to a qualified disabled employee, by reason of his disability, than the amount to which a non-disabled person performing the same work is entitled;"
                            },
                            {
                                type: "p",
                                text: "(e) favouring a non-disabled employee over a qualified disabled employee with respect to promotion, training opportunities, study and scholarship grants, solely on account of the latter’s disability;"
                            },
                            {
                                type: "p",
                                text: "(f) reassigning or transferring a disabled employee to a job or position he cannot perform by reason of his disability;"
                            },
                            {
                                type: "p",
                                text: "(g) dismissing or terminating the services of a disabled employee by reason of his disability unless the employer can prove that he impairs the satisfactory performance of the work involved to the prejudice of the business entity: provided, however, that the employer first sought to provide reasonable accommodation for disabled persons;"
                            },
                            {
                                type: "p",
                                text: "(h) failing to select or administer in the most effective manner employment tests which accurately reflect the skills, aptitude or other factor of the disabled applicant or employee that such test purports to measure, rather than the impaired sensory, manual or speaking skills of such applicant or employee, if any; and"
                            },
                            {
                                type: "p",
                                text: "(j) excluding disabled persons from membership in labour unions or similar organisations."
                            },
                            {
                                type: "p-bold",
                                text: "Reflection:"
                            },
                            {
                                type: "p",
                                text: "In summary of this section, you are entitled to equal opportunities in relation to employment. You are not to be discriminated against your disability and are not to be favored less than the other employees or applicants. Experienced any discrimination? Then fight for your rights! It is written in the law, therefore you have every right if they treated you less."
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                title: "Module 4",
                parts: [
                    {
                        id: 0,
                        title: "Watch the Videos by Project Inclusion",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "lesson",
                        lessonNum: 1,
                        body: [
                            {
                                type: "p",
                                text: "Now that you are exposed to the basics of self-advocacy, we now move on to the topic of finding the job that fits you the most. Linked in this section is a video by Project Inclusion about people with disabilities with their own stories on the path of self-advocacy and jobs they aimed for. We hope that this helps inspire you on your journey towards self-advocacy. The video’s attached below have subtitles in order for you to understand it better."
                            },
                            {
                                type: "video",
                                text: '#DareToHire: "SPECIAL"',
                                link: "https://www.youtube.com/watch?v=511WkQaiJZg"
                            },
                            {
                                type: "video",
                                text: '#DareToHire: "GRATEFUL"',
                                link: "https://www.youtube.com/watch?v=55YnM5HIPvo"
                            },
                            {
                                type: "video",
                                text: '#DareToHire: "PURPOSE"',
                                link: "https://www.youtube.com/watch?v=IGoQcZxrfoE"
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: "#DareTo Insights",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "discussion",
                        // lessonNum: 1,
                        body: [
                            {
                                type: "p",
                                text: "From the previous videos presented, you see stories of different persons with disabilities with inspiring stories. Because they are an advocate of themselves, they continued to persevere and move forward. Because they know their rights, please freely discuss below what insights were you able to gather and how can it be applied into your life:"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Resume and Cover Letter Writing",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "lesson",
                        lessonNum: 2,
                        body: [
                            {
                                type: "in-line-link",
                                text: "Are you more motivated now to find a job that suits you the most? That’s great! Before getting your dream job first though, you must learn how to craft a resume and a cover letter to get the attention of the employers. <a href='https://drive.google.com/drive/folders/1nB3yNqVCPSBe9dkaQdxgZg1ixOU_Ig51'> This is your time to apply the previous lessons and incorporate it into a professional setting. </a> Attached below is a file made by Project Inclusion that will help you in your journey to writing the best resume and cover letters:"
                            },
                            {
                                type: "link2",
                                text: "LINK TO THE DRIVE",
                                link: "https://drive.google.com/drive/folders/1nB3yNqVCPSBe9dkaQdxgZg1ixOU_Ig51"
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: "Resume Crafting",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "activity-submit",
                        // lessonNum: 2,
                        body: [
                            {
                                type: "p",
                                text: "From the lessons presented in the previous part, submit a resume and cover letter that presents you as an individual. Do not worry too much about credentials! If you feel like you are lacking certain skills or experiences needed to get a job you want, you can always build rapport through internships and finding places that are willing to provide you with the exposure you need or want. We are in this together to enable you to DEAFy societal norms!"
                            },
                            {
                                type: "p",
                                text: "After submitting your activity, please proceed to contacting your self-advocacy group and your instructor regarding your thoughts and feelings. This will help you ease any anxieties or concerns you have with yourself as a working individual. ",
                            },

                        ]
                    },
                ]

            },
            {
                id: 5,
                title: "Module 5",
                parts: [
                    {
                        id: 0,
                        title: "The Interview Process",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "lesson",
                        lessonNum: 1,
                        body: [
                            {
                                type: "p",
                                text: "Now that you have prepared a resume and a cover letter, you are now ready to move on to the interview proper. After submitting your credentials to a company you want to work in, it is time for you to wait until they get back to you. When they do get back to you and ask for your free time for an interview, it may seem daunting at first. "
                            },
                            {
                                type: "listOrdered",
                                text: [
                                    '"What if they won’t get me because of my disability?"',
                                    '"What do I do if we have some communication issues because I am deaf?"',
                                    '"What if I don’t have good enough credentials?"'
                                ]
                            },
                            {
                                type: "p",
                                text: "As a person with a disability, you might feel that the odds are stacked against you because of your condition. Before worrying and being anxious about what might happen in the future, tell yourself this first: Don’t let your disability stand in your way of landing your dream job. There is a possibility of you achieving your dream job and the possibility of being rejected, that much is true. But if you worry without putting in the effort, then there is no one but yourself to blame for missing out the chance. It is your responsibility to go into the interview with a positive mindset and show that you have what it takes to do the job (maybe even better than an able-bodied individual)!"
                            },
                            {
                                type: "p",
                                text: "We will now proceed to 5 tips that you can use to ace the job interview."
                            }
                        ]
                    },
                    {
                        id: 1,
                        title: "5 Tips to Remember",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "lesson",
                        lessonNum: 2,
                        body: [
                            {
                                type: "img",
                                img: "ENABLE UPDATED-24.svg"
                            },
                            {
                                type: "header",
                                text: "1. Do Your Research"
                            },
                            {
                                type: "p",
                                text: "Feeling nervous about the interview you will have soon? Don’t worry! It is something that most people would feel anxious about in this stage. In order to ease this anxiety, what you can do is to do research prior to the interview session. You can go online and search the details about the company, the hiring department, the types of people they hire and whether or not the company is known to be disability-friendly. Demonstrating an extra knowledge on your company shows that you really want to be part of their team and can earn you more chances of getting hired."
                            },
                            {
                                type: "listHeader",
                                text: "If it is possible for you, you may also reach out to other individuals in the same industry or in the same position you are interested in. Ask and talk to them regarding any potential gaps in your skill set and what these industries typically look for in an employee. It is also helpful to prepare your thoughts on the following topics:"
                            },
                            {
                                type: "list",
                                text: [
                                    "Is the company going to be a good fit for you?",
                                    "What strengths and weaknesses do you possess? ",
                                    "In 5-10 years, where would you see yourself in? ",
                                    "What salary compensation are you expecting? ",
                                    "What were some conflicts you’ve faced at work/social situation?",
                                    "How did you deal with the aforementioned conflicts?"
                                ]
                            },
                            {
                                type: "p",
                                text: "These are some potential questions that may be asked to you during your interview, so it's good to prepare for it beforehand. The more prepared you are, the less likely that you are to stumble upon your answer. Although the pandemic may make it difficult to actually have the interview in a physical setting, remember to still have a good body language while having the interview online. This will help you give an advantage over other candidates that you are confident in yourself and in your own skills. "
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-27.svg"
                            },
                            {
                                type: "header",
                                text: "2. Disclosure and Assistance"
                            },
                            {
                                type: "p",
                                text: "It is understandable that there are some people who prefer not to disclose their disabilities unless they really have to. The most prominent example of this are people who have mental disabilities. But in some situations, non-disclosure of such information can be more detrimental than it is helpful. It will not only be difficult for you because they could not empathize your situation, but they may also not be able to handle your situation if they were not told of it in advance."
                            },
                            {
                                type: "p",
                                text: "Remember that you are still entitled and it is your right to have communication access. Because of the current situation in relation to social distancing, there are numerous ways to go about the advent of an interview. Trying to go without assistance or prior decision-making will make the process harder for yourself. Accessibility in the office will make your work life easier and smoother if you consider to disclose it. If you are a deaf individual, you can either arrange for an interpreter to also be part of the interview or reach to a conclusion of having the interview purely based on text instead. "
                            },
                            {
                                type: "p",
                                text: "Whatever decision you make, do not be afraid to ask others who are in the same predicament as you (which is why we have our self-advocacy group to help you with your problems together). You can also do some prior research before proceeding with the interview."
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-23.svg"
                            },
                            {
                                type: "header",
                                text: "3. Your Disability is NOT a Weakness; Be Confident"
                            },
                            {
                                type: "p",
                                text: "There might be a portion where your interviewer will ask you about your weakness or a work situation you have faced in the past. With that said, NEVER associate your disability with weakness, nor should you be apologetic about it either. In order to ace that job interview, you have to have the conviction and belief in yourself. Remind yourself why you are a good fit for the position rather than focusing on your disability. "
                            },
                            {
                                type: "p",
                                text: "Instead, think about how your disability can make you a better employee—turn it into a strength! If you remembered the videos you watched from Project Inclusion, you can see how these people with disabilities are confident in themselves. Those with disabilities are even commended to be better employees because of how hard-working they are. Highlight these positive facts you have about yourself and assure the employer that you are capable enough to complete the tasks of the position despite your disability. "
                            },
                            {
                                type: "p",
                                text: "Also, never underestimate the power of a smile. You can do it! You are no less suited to the role just because you are deaf, so have faith in your abilities!"
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-26.svg"
                            },
                            {
                                type: "header",
                                text: "4. Educating People "
                            },
                            {
                                type: "p",
                                text: "There will be some times where some employers believe that you are less suited for your position because you are deaf. While this ableism mindset from able-bodied people and unfair misconceptions continue to plague many deaf individuals, mindsets can still be changed. "
                            },
                            {
                                type: "p",
                                text: "This is where your self-advocacy skills can come in handy. Of course this does not mean to outright complain or demonize them because this could make them see you in a negative light. You can instead educate them with empathy and kindness. Explain why you are perfect for the job and how you will accomplish your tasks with any assistive technology you have. As mentioned, emphasize that being deaf is not going to limit you and instead focus on the positive aspects of it. This is also a good opportunity to showcase your emotional intelligence by keeping a level head and explain how your disability made you a stronger person and a more-than-capable candidate. "
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-22.svg"
                            },
                            {
                                type: "header",
                                text: "5. Be Proud of Your Own Self "
                            },
                            {
                                type: "p",
                                text: "Always remember--the qualifications and experiences you have placed in your resume is what led you up to this interview. Don’t doubt yourself and be confident! Be proud of your achievements and DEAF-initely ace that interview!"
                            },
                            {
                                type: "p",
                                text: "Looking for a job or an opportunity to make your resume look appealing to the employers? Check out our internship opportunities and partnered companies here! We are more than happy to help!"
                            },
                            {
                                type: "ref",
                                text: "(How to Ace the Interview With a Disability, Iswari Nallisamy)"
                            },
                            {
                                type: "ref",
                                text: "(How to Prepare for a Job Interview If You’re Deaf, 2020)"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Mock Interview",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "activity-interview",
                        // lessonNum: 1,
                        body: [
                            {
                                type: "img",
                                img: "ENABLE UPDATED-17.svg"
                            },
                            {
                                type: "p",
                                text: "Before proceeding into your interview prompt, here are some questions you may answer and prepare for:"
                            },
                            {
                                type: "header",
                                text: "1. Tell me about yourself"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond: "
                            },
                            {
                                type: "list",
                                text: [
                                 "Some respond by stating their work and employment history",
                                 "Must also offer new information that is not included in your resume (ex. Hobbies outside work)",
                                 "May also focus on a key aspect of your career",
                                 "Ensure that your answer is aligned with what you are applying for"
                                ]
                            },
                            {
                                type: "header",
                                text: "2. Why do you want to be a part of our company? "
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "Demonstrate that you have done your research regarding the company from either their social media platforms, news articles and other possible outlets",
                                    "Look at the company’s mission and vision values and connect it to your own personal values and desired career path"
                                ]
                            },
                            {
                                type: "header",
                                text: "3. Tell me about your strengths? "
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "Identify about two or three key attributes that you are most proud of and give concrete examples of these",
                                    "Remember to make your points relevant for the position you are aiming for",
                                    "You may also present how your disability can become a source of strength"
                                ]
                            },
                            {
                                type: "header",
                                text: "4. What are your weaknesses?"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "REMEMBER! Not to put your disability as a weakness, make it a strength",
                                    "Take time to craft an answer that is not considered to be cliché--meaning something that is obvious that you are trying to make your weakness a strength (ex. “I’m a perfectionist”)",
                                    "This is an opportunity to showcase your own desire and self-awareness in relation to personal development", 
                                    "Think of something that is not critical to the role and frame it in a positive light"
                                ]
                            },
                            {
                                type: "header",
                                text: "5. Where do you see yourself in five to ten years?"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "This is where your employers can see if you are a goal-oriented and driven individual",
                                    "Make sure it is realistic and showcase your ability to be flexible"
                                ]
                            },
                            {
                                type: "header",
                                text: "6. Can you tell me about a time where you encountered a challenge? How did you overcome it?"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "This is an opportune time for you to use the CAR method: Context, Action and Result",
                                    "Choose an instance wherein you helped solve a challenge in relation to the skill or job you are applying for",
                                    "Remember to provide background and context for the employer to understand the situation you faced better",
                                    "Describe the actions and measures taken and the result that came from it"
                                ]
                            },
                            {
                                type: "header",
                                text: "7. What are things you look forward to with this role?"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "Start with your skills--identify a specific one that you are proud of and talk about how the role you are interested in will develop said skill",
                                    "Explain also your motivations in doing so and how this role can achieve your goals"
                                ]
                            },
                            {
                                type: "header",
                                text: "8. Do you have any questions for me?"
                            },
                            {
                                type: "p-bold",
                                text: "How you can respond:"
                            },
                            {
                                type: "list",
                                text: [
                                    "ALWAYS ask a question as it shows that you are truly interested in the company",
                                    "You may also prepare a list of possible questions you would like beforehand",
                                    "Avoid asking questions that have already been addressed during the course of the interview"
                                ]
                            },
                            {
                                type: "p",
                                text: "After practicing the possible interview questions in this activity, you may also proceed to have a mock interview with your designated instructor or practice with your self-advocacy group. This will allow you to go into the interview fully prepared."
                            },
                            {
                                type: "ref",
                                text: "(Common interview questions, Robert Half)"
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: "Module 6",
                parts: [
                    {
                        id: 0,
                        title: "Workplace Etiquette",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "lesson",
                        lessonNum: 1,
                        body: [
                            {
                                type: "img",
                                img: "ENABLE UPDATED-28.svg"
                            },
                            {
                                type: "p",
                                text: "Now that you have moved on from the interview phase, let us hope that your results bear some good news! If so, welcome to the world of employment!"
                            },
                            {
                                type: "p",
                                text: "Now that you have entered the workforce, you have to properly observe certain etiquettes. Although the pandemic has pushed a lot of the work into a work-from-home or online setting, proper decorum must still be maintained. With that said, here are the first few general things to remember on a online setting:"
                            },
                            {
                                type: "header",
                                text: "1. Do not click the “Reply All” in an email chain"
                            },
                            {
                                type: "p",
                                text: "There are differences and consequences between “Reply” and “Reply All” in an email. Sometimes, there are details in the mail attached that are meant to be confidential to other parties that were originally copied into the email thread. With that, it is your responsibility to always check beforehand. "
                            },
                            {
                                type: "header",
                                text: "2. Disclosure and Assistance"
                            },
                            {
                                type: "p",
                                text: "It is understandable that there are some people who prefer not to disclose their disabilities unless they really have to. The most prominent example of this are people who have mental disabilities. But in some situations, non-disclosure of such information can be more detrimental than it is helpful. It will not only be difficult for you because they could not empathize your situation, but they may also not be able to handle your situation if they were not told of it in advance."
                            },
                            {
                                type: "header",
                                text: "3. Avoid the use emojis in work emails"
                            },
                            {
                                type: "p",
                                text: "This is only applicable in a professional or serious setting. If you are to have a friendly banter with a friend at work via emails, then it is completely fine, but when talking to clients or supervisors, one must avoid using emojis. Maintain a sense of professionalism so that others may see you as a competent individual. If you are still not sure with your work environment, you could also try and test out the waters and see how they converse to each other through emails before making any conclusions in regards to this aspect. "
                            },
                            {
                                type: "header",
                                text: "4. Interact with your co-workers"
                            },
                            {
                                type: "p",
                                text: "Although it is more difficult to socialize now that people are doing their best to practice social distancing, you are still able to socialize with your co-workers online! You can chat with them through socials that your workplace uses or even your preferred social media. Don’t forget to also go to company hangouts that are held on video hosting platforms. It is a great way to get to know your colleagues. "
                            },
                            {
                                type: "header",
                                text: "5. Dress appropriately"
                            },
                            {
                                type: "p",
                                text: "Even though you may be subjected to work at home with the current crisis the whole world is facing, you must still look presentable whenever there are online company meetings. It helps people to take you seriously, and it also shows that you are taking your job seriously too. "
                            },
                            {
                                type: "header",
                                text: "6. Mute yourself when you are not speaking"
                            },
                            {
                                type: "p",
                                text: "Oftentimes, our surroundings are not exactly the most quiet setting. Because of this, you must always remember to mute in courtesy of those who are speaking. This will allow them not to be distracted by the sudden background noise, but it also saves you from possibly embarrassing yourself if they heard some unwarranted things on your end. "
                            },
                            {
                                type: "header",
                                text: "7. Set office hours"
                            },
                            {
                                type: "p",
                                text: "Since the pandemic started, it became hard for many to divide their time between work and relax because everything happens already in the comforts of people’s homes. Because of this, make sure to set times where your co-workers can be sure that they are able to contact you for work-related concerns. By making yourself available, you can improve your collaboration with a remote team. "
                            },
                            {
                                type: "header",
                                text: "8. Remember to smile"
                            },
                            {
                                type: "p",
                                text: "Even as simple as a smile in a work call can make the air in the call lighter. Having a positive attitude will not only make you seem approachable, but it will also affect your job performance significantly. Never underestimate this power!"
                            },
                            {
                                type: "img",
                                img: "ENABLE UPDATED-25.svg"
                            },
                            {
                                type: "title",
                                text: "Disability Etiquette"
                            },
                            {
                                type: "listHeader",
                                text: "As a deaf individual who is part of the PWD community, there is also a different set of etiquettes you must follow in order to have a pleasant working environment:"
                            },
                            {
                                type: "list",
                                text: [
                                    "Communicate with both the employers and employees in advance if you have any accommodations you need in order to work efficiently",
                                    "Inform other people if you need them to speak louder or quieter",
                                    "State your preferred avenue of communication"
                                ]
                            },
                            {
                                type: "ref",
                                text: "https://www.wright.edu/inclusive-excellence/disability-services/disability-etiquette-in-the-workplace"
                            },
                            {
                                type: "ref",
                                text: "https://money.usnews.com/money/blogs/outside-voices-careers/articles/workplace-etiquette-for-the-office-and-remote"
                            },
                            {
                                type: "ref",
                                text: "https://www.northeastern.edu/graduate/blog/workplace-etiquette/"
                            },
                        ]
                    },
                    {
                        id: 1,
                        title: "Etiquettes",
                        desc:
                            "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.",
                        status: 0,
                        type: "exercise",
                        // lessonNum: 1,
                        body: [
                            {
                                type: "p",
                                text: "To refresh your memory, state some examples of both general and disability etiquette you must practice and why they are important. Please make sure that you give at least 3 examples and apply it to your everyday life. "
                            }
                        ],
                        replies: [
                            {
                                id: 0,
                                commenter: "Cha Tan",
                                time: "17:32",
                                comment: "My three examples are in the files",
                                files: ["Some sort of file.pdf", "Some sort of file.png"],
                                replies: []
                            },
                            {
                                id:1,
                                commenter: "Cha Tan",
                                time: "17:29",
                                comment: "I hope my answers are correct hehe",
                                files: [],
                                replies: []
                            }
                        ]
                    }
                ]
            }
          ],
          upcomingAssignments: [
            {
              id: 0,
              title: "Submit Class Assignment",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Submitted",
            },
            {
              id: 1,
              title: "Discuss with Company A",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Submitted",
            },
            {
              id: 2,
              title: "Presentation with Daryll",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Incomplete",
            },
          ],
          finishedAssignments: [
            {
              id: 0,
              title: "#DareToInsights",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Missing",
            },
            {
              id: 1,
              title: "Resume Crafting",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Late",
            },
            {
              id: 2,
              title: "Mock Interview",
              availableUntil: "Mar 3 at 11:59pm",
              status: "Submitted",
            },
          ],
        },
        {
          id: 1,
          subject: "How to Start Your Own Business",
          prof: "Jan Belmonte",
          img: "ENABLE UPDATED-39.svg",
          announcements: [
            {
              id: 0,
              poster: "Jan Belmonte",
              time: "13h",
              title: "Title of Announcement",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              id: 1,
              poster: "Jan Belmonte",
              time: "20h",
              title: "Title of Announcement",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
          modules: [],
          upcomingAssignments: [],
          finishedAssignments: [],
        },
        {
          id: 2,
          subject: "Graphic Design is My Passion",
          prof: "Chelsea Go",
          img: "ENABLE UPDATED-37.svg",
          announcements: [
            {
              id: 0,
              poster: "Jan Belmonte",
              time: "13h",
              title: "Title of Announcement",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
              id: 1,
              poster: "Jan Belmonte",
              time: "20h",
              title: "Title of Announcement",
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          ],
          modules: [],
          upcomingAssignments: [],
          finishedAssignments: [],
        },
      ],
      myInternships: [
        {
          id: 0,
          subject: "Booky",
          img: "logo1.1.png",
          prof: "Daryll Santillan",
          announcements: [
            {
              id: 0,
              poster: "Daryll Santillan",
              time: "21h",
              title: "INTERN HUDDLE",
              body: [
                { type: "p", text: "Good day interns!" },
                {
                  type: "p",
                  text:
                    "I hope the discussion yesterday was a fruitful one for all of you! If you have any more questions you would like to ask me, please feel free to message me anytime! My DMs are always open :) Enjoy your long weekend ahead and let’s see each other again next week!",
                },
                { type: "p", text: "Here is our group photo from earlier!" },
                { type: "img", img: "pektor.png" },
              ],
            },
            {
              id: 0,
              poster: "Daryll Santillan",
              time: "3d",
              title: "FIRST DAY TOGETHER",
              body: [
                { type: "p", text: "Hi everyone!" },
                {
                  type: "p",
                  text:
                    "It was great talking to all of you through the chat earlier. Let us schedule a meeting soon together so we can e-meet each other and know each others’ work ethics! If you are feeling a little bit shy, do not worry. This internship is a safe space for all of you. Let us schedule a when-to-meet through chat regarding our available times. ",
                },
                { type: "p", text: "Have a great day and always remember to enable yourselves to strive more!" },
              ],
            },
          ],
          milestones: [
            {
              id: 0,
              title: "March",
              parts: [
                {
                  id: 0,
                  title: "Introductions",
                  desc:
                    "Introduction of what Booky is and presenting the basics of what this internship entails...",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
                {
                  id: 1,
                  title: "Excel Sheet Practice",
                  desc:
                    "Refresher of using Excel sheets for future use in other activities and tasks given for the interns...",
                  status: 3,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
                {
                  id: 2,
                  title: "Use of Click-Up",
                  desc:
                    "Organize and discuss between departments with tasks through the use of Click-Up...",
                  status: 0,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
              ]
            },
            {
              id: 1,
              title: "April",
              parts: [
                {
                  id: 0,
                  title: "Ideate a Booky Prime Sale",
                  desc:
                    "Provide campaign ideas and plans for the incoming Booky Prime Sale to be posted in all available social media platforms...",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
                {
                  id: 1,
                  title: "Discussions with the Marketing Team",
                  desc:
                    "End of the quarter discussion with the Marketing Team regarding the tasks accomplished and what can be improved...",
                  status: 3,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
                {
                  id: 2,
                  title: "Booky Prime Sale Live",
                  desc:
                    "The campaign idea made will be set live in the Booky website as well as on Booky’s social media platforms...",
                  status: 0,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                },
              ]
            },
            {
              id: 2,
              title: "May",
              parts: [
                {
                  id: 0,
                  title: "Handling of Partnerships",
                  desc:
                    "Set meetings, email and discuss possible partnerships with other brands and companies....",
                  status: 2,
                  type: "lesson",
                  lessonNum: 1,
                  body: []
                }
              ]
            },
          ],
          discussions: [
            {
              id: 0,
              title: "Feedback on First Week of Internship",
              body: [
                {
                  type: "header",
                  text: "How Are You Feeling?"
                },
                {
                  type: "p",
                  text: "How have your internship experience been? Have you been enjoying it and learning a lot? Have you been experiencing problems with other individuals or the community in general? Any feedback can be placed in this discussion board. We will do our best to help you throughout this journey. As this place is a safe space for all PWDs, please do not be afraid to approach us. If you would like to talk about your experience more privately, you may always approach me through DMs. "
                }
              ],
              replies: [
                {
                    id: 0,
                    commenter: "Cha Tan",
                    time: "17:32",
                    comment: "Hi there",
                    files: ["Some sort of file.pdf", "Some sort of file.png"],
                    replies: []
                },
                {
                    id:1,
                    commenter: "Cha Tan",
                    time: "17:29",
                    comment: "Here are some of my works that I am proud of during my internship :D",
                    files: [],
                    replies: []
                }
            ]                
                

            }
          ]
        },
        { id: 1, subject: "Shopee", img: "logo2.png", prof: "Casper" },
        { id: 2, subject: "808 Studio", img: "logo3.png", prof: "Dot Li" },
      ],
      allCourses: [
        {
          id: 0,
          subject: "Overcoming Obstacles as a PWD",
          prof: "Praise Lam",
          length: "6h 30min",
          img: "ENABLE UPDATED-38.svg",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
          cover: "ENABLE UPDATED-14.svg",
          intro: [
              { type: "header",
                text: "About this specialization"
              },
              { type: "p",
                text: "In this class, you will learn how to speak up for yourself, make your own decisions and find confidence in your skills for future job applications with the help of Project Inclusion. You will also find others who are on the same journey as you are and find those who will support you. It is also important to know your rights and responsibilities as an individual and as a person with disability. "
              },
              { type: "header",
                text: "What you will Learn "
              },
              { type: "list",
                text: [
                  "Gain confidence on yourself and your skills",
                  "Craft Resumes and Acing Interviews",
                  "Communicate with others who are on the same path as you",
                  "Setting goals and making choices"
                ]
              },
          ]
   
        },
        {
          id: 1,
          subject: "Excelling in Your Job",
          prof: "Cha Tan",
          length: "3h 15min",
          img: "",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 2,
          subject: "Programming a PWD-Friendly Site",
          prof: "Caitlin Chua",
          length: "7h 40min",
          img: "",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 3,
          subject: "Excelling in Your Job Part 2",
          prof: "Cha Tan",
          length: "11h 30min",
          img: "",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 4,
          subject: "Basic Skills Training",
          prof: "Gene Tan",
          length: "5h 35min",
          img: "ENABLE UPDATED-35.svg",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 5,
          subject: "Graphic Design is My Passion",
          prof: "Chelsea Go",
          length: "11h 35min",
          img: "ENABLE UPDATED-38.svg",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 6,
          subject: "How to Start Your Own Business",
          prof: "Jan Belmonte",
          length: "6h 30min",
          img: "ENABLE UPDATED-35.svg",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 7,
          subject: "Self-Advocacy & Work for PWDs",
          prof: "Praise Lam",
          length: "3h 15min",
          img: "ENABLE UPDATED-39.svg",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
        {
          id: 8,
          subject: "Excel Well in Excel Sheets",
          prof: "Pauline de Ocampo",
          length: "7h 40min",
          img: "",
          desc:
            "In this class, you will learn how to speak up for yourself, make your own decisions and...",
        },
      ],
      allInternships: [
        {
          id: 0,
          company: "Booky",
          position: "Marketing Intern",
          img: "logo1.1.png",
          cover: "ENABLE UPDATED-29.svg",
          desc:
            "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons...",
          intro: [
            { type: "header",
              text: "What is Booky?"
            },
            { type: "p",
              text: "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons. On top of that, Booky works completely OFFLINE."
            },
            { type: "header",
              text: "Booky Internship Opportunity"
            },
            { type: "p",
              text: "We're looking for an individual to become a member of the marketing team, working closely with the campaigns and partnerships team, but also coordinating with the different teams in the company (digital marketing, creatives, web team). At the end of this internship, the individual will have a holistic experience of marketing as a discipline while having developed core attributes in managing campaigns, forging relationships with partners, and ideating and executing marketing strategies. "
            },
            { type: "header",
              text: "Responsibilities"
            },
            { type: "list",
              text: [
                "Work with the head to assess growth opportunities for core products, craft strategies that will help drive revenue through campaign execution ",
                "Evaluate existing processes and how they can be better streamlined for operational efficiency ",
                "Understand, analyze, and apply data to recommend relevant experiments that the teams can test and scale with ",
                "Help coordinate with external partners and explore key initiatives that will drive growth ",
                "Come up with insights from a user and merchant perspective that will improve app usage, contribute to core product value proposition, and the Booky vision as a whole "
              ]
            },
          ],
          process: {
            desc: [
              {type: "p", text: "We want every individual to hone their skills and gain the necessary experiences needed in order to attain their dream jobs. With that being said, each companies listed will have their own hiring process, and we will be aiding you through each step. The features in this site is designed to ensure that you are able to prepare yourself for the application for an internship and give you insights on the job application journey. "},
              {type: "p", text: "To ensure that everybody who is interested in joining this company has an equal opportunity and ability to start this journey, we did our best tomake our process simple, easy and accessible. If you need a certain accomodation for the applications, please do not hesitate to send a message beforehand at xxx@gmail.com."},
            ],
            steps: ["applications", "assessment", "interviews", "offer"],
          },
        },
        {
          id: 1,
          company: "Booky",
          position: "Finance Intern",
          img: "logo1.1.png",
          desc:
            "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons...",
          process: {
            desc: [
              "We want every individual to hone their skills and gain the necessary experiences needed in order to attain their dream jobs. With that being said, each companies listed will have their own hiring process, and we will be aiding you through each step. The features in this site is designed to ensure that you are able to prepare yourself for the application for an internship and give you insights on the job application journey. ",
              "To ensure that everybody who is interested in joining this company has an equal opportunity and ability to start this journey, we did our best tomake our process simple, easy and accessible. If you need a certain accomodation for the applications, please do not hesitate to send a message beforehand at xxx@gmail.com.",
            ],
            steps: ["applications", "assessment", "interviews", "offer"],
          },
        },
        {
          id: 2,
          company: "Booky",
          position: "Operations Intern",
          img: "logo1.1.png",
          desc:
            "Booky is a homegrown food app where you can discover new restaurants, get unlimited discounts, and claim numerous digital coupons...",
        },
        {
          id: 3,
          company: "Shopee",
          position: "Features Intern",
          img: "logo2.png",
          desc:
            "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration...",
        },
        {
          id: 4,
          company: "Shopee",
          position: "Communities Intern",
          img: "logo2.png",
          desc:
            "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration...",
        },
        {
          id: 5,
          company: "Shopee",
          position: "HR Intern",
          img: "logo2.png",
          desc:
            "Shopee is an e-commerce site which was founded in 2015. Shopee presents an expansive range of products, a social community for exploration...",
        },
        {
          id: 6,
          company: "808 Studio",
          position: "Design Intern",
          img: "logo3.png",
          desc:
            "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat...",
        },
        {
          id: 7,
          company: "808 Studio",
          position: "Sales Intern",
          img: "logo3.png",
          desc:
            "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat...",
        },
        {
          id: 8,
          company: "808 Studio",
          position: "Clients Intern",
          img: "logo3.png",
          desc:
            "808 Studio is about providing a fun, liberating and inclusive way to achieve one’s fitness goals that makes them feel as good as they ­­look. We each have our own beat...",
        },
      ],
    };
  },
  mutations: {
    sidebarActive1(state, index) {
      // mutate state
      state.sidebarActive1 = index;
    },
    finishModulePart(state, {id, moduleID, moduleIDID}) {
        // mutate state
        id = parseInt(id);
        moduleID = parseInt(moduleID);
        moduleIDID = parseInt(moduleIDID);
        state.myCourses[id].modules[moduleID].parts[moduleIDID].status = 2;

        if (moduleIDID < state.myCourses[id].modules[moduleID].parts.length - 1) {
            console.log(state.myCourses[id].modules[moduleID].parts[moduleIDID].status);
            // state.myCourses[id].modules[moduleID].parts[moduleIDID].status = state.myCourses[id].modules[moduleID].parts[moduleIDID].status == 2 ? 3 : 2;
            state.myCourses[id].modules[moduleID].parts[moduleIDID+1].status = state.myCourses[id].modules[moduleID].parts[moduleIDID+1].status == 2 ? 2 : 3;
        }
        else {
            state.myCourses[id].modules[moduleID].parts[moduleIDID].status = 2;
        }
      },
  },
  actions: {
    sidebarActive1({ commit }, index) {
      commit("sidebarActive1", index);
    },
    finishModulePart({ commit }, moduleID, moduleIDID) {
        commit("finishModulePart", moduleID, moduleIDID);
        console.log("lmao")
    }
  },
});
