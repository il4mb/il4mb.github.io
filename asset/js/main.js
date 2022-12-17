
window.addEventListener('load', () => {

    let book = DOM('div', {

        attr: { class: "container-sm" },
        inner: [

            DOM('div', {
                attr: { class: "welcome-screen" },
                inner: [

                    DOM("div", {
                        attr: { class: "floating-center" },
                        inner: [
                            DOM('h1', {
                                inner: "WELCOME TO MY PORTOFOLIO"
                            }),

                            DOM("img", {
                                attr: { class: "w-100 mt-5", src: "./asset/vector/welcome-gif.gif" }
                            })
                        ]
                    })

                ]
            }),

            // INTRODUCE
            DOM("div", {
                attr: {},
                inner: [
                    DOM("h4", {
                        inner: "INTRODUCE"
                    }),

                    DOM("p", {
                        attr: { class: "ms-3" },
                        inner: "MY NAME IS " +
                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: "ILHAM B"
                            }) +

                            "![n]" +
                            DOM("i", {
                                attr: { class: "fa-solid fa-graduation-cap" }
                            }) +
                            " IM STUDENT OF " +
                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: 'STMIK AMIK RIAU'
                            }) +

                            "![n]" +
                            DOM("i", {
                                attr: { class: "fa-solid fa-laptop-code" }
                            }) +
                            " MAJORING " +
                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: 'TEKNIK INFORMATIKA' +
                                    DOM('i', {
                                        inner: " &#8212; Technical Information"
                                    })
                            })
                        //<i class="fa-solid fa-laptop-code"></i>
                    }),
                ]
            }),

            DOM("h5", {
                attr: { class: "text-center text-warning mt-5 mb-5 pb-5 pt-5" },
                inner: "I am a full-stack web developer and mobile developer"
            }),

            // CURENT PROJECT
            DOM("div", {
                attr: { class: "mt-5 mb-5 pb-5 pt-5" },
                inner: [
                    DOM("h4", {
                        inner: "MY LAST PROJECT"
                    }),

                    DOM('div', {
                        attr: { class: "row p-3 m-auto", style: "width: fit-content"},
                        inner: [

                            DOM("div", {
                                attr: { class: "col-sm book" },
                                inner: [
                                    DOM("img", {
                                        attr: { width: "150px", src: "https://img.shields.io/badge/OPEN-BINARY-red?style=for-the-badge&&logoColor=black&labelColor=blue" }
                                    }),
                                    DOM("p", {
                                        attr: { class: "mt-3" },
                                        inner: "Open Binary has a simple code to add and subtract binary numbers" +
                                            "![n]" +
                                            DOM("a", {
                                                attr: { href: "https://ilh4mb.github.io/Open-Binary/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-CalculatorBinary-brightgreen" }
                                                    })
                                                ]
                                            }) +
                                            DOM("a", {
                                                attr: { href: "https://github.com/ilh4mb/Open-Binary/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-Repository-1db87c?logo=github&logoColor=white&labelColor=3776AB" }
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm book" },
                                inner: [
                                    DOM("img", {
                                        attr: { width: "50px", height: "50px", src: "./asset/vector/Marapi-square-logo-nontext.png" }
                                    }),
                                    DOM("p", {
                                        attr: { class: "mt-3" },
                                        inner: "Marapi is a CMS <i>(Content Management System)</i>" +
                                            "![n]" +
                                            DOM("a", {
                                                attr: { href: "https://github.com/ilh4mb/Marapi-CMS/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-Repository-1db87c?logo=github&logoColor=white&labelColor=3776AB" }
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            // STORY LINE
            DOM("div", {
                attr : {class: "mt-5 mb-5 pb-5 pt-5"},
                inner: [
                    DOM('h4', {
                        inner: "MY STORY LINE"
                    }),

                    DOM("div", {
                        attr: { class: 'lines' },
                        inner: [

                            DOM("p", {
                                inner: "Born in Pekanbaru 1998"
                            }),

                            DOM("p", {
                                inner: "Move to Sumatera Barat 2002"
                            }),

                            DOM('p', {
                                inner: "2008 getting interested in electronics and learning about how electronics work"
                            }),

                            DOM('p', {
                                inner: "2010 I started to get to know the world of the internet and created my first email account"
                            }),

                            DOM("p", {
                                inner: "Passed elementry school in 2012 at sumatera barat"
                            }),

                            DOM("p", {
                                inner: "Do not continue school and work at a young age in Jakarta in 2022"
                            }),

                            DOM('p', {
                                inner: "2013 I started to know Wordpress and Blogger"
                            }),

                            DOM('p', {
                                inner: "Frustrated because of the pressure and I moved to Malaysia in 2014 and worked at the restaurant Azzlind.sdn.bhd"
                            }),

                            DOM('p', {
                                inner: "2016 Get to know the world of programming and learn HTML"
                            }),

                            DOM('p', {
                                inner: "2017 I was frustrated because of work pressure and decided to return to Indonesia and continue my schooling. I returned to Pekanbaru, my hometown"
                            }),

                            DOM('p', {
                                inner: "2018 Continue junior high school at SPNF SKB PEKANBARU CITY"
                            }),

                            DOM('p', {
                                inner: "2018 I started to learn HTML, PHP and JavaScript"
                            }),

                            DOM('p', {
                                inner: "2019 Graduated junior high school"
                            }),

                            DOM('p', {
                                inner: "2019 Started working as a CIMB Niaga ATM operator under the auspices of PT. MKMA"
                            }),

                            DOM('p', {
                                inner: "2019 Continuing my education to high school, being a student while being a worker"
                            }),

                            DOM('p', {
                                inner: "2020 I made my first website by renting hosting using my salary"
                            }),

                            DOM('p', {
                                inner: "2021 Starting to know Node.js, React.js java, python, C, C++ and C# but I'm interested in java, C#, C++, Node.js and React.js"
                            }),

                            DOM('p', {
                                inner: "2022 Graduated from high school and I decided to continue studying at STMIK AMIK RIAU"
                            }),
                            DOM('p', {
                                inner: "2022 Learn python in college"
                            }),
                            DOM('p', {
                                inner: "Until Now"
                            }),
                        ]
                    })
                ]
            })
        ]
    });

    document.body.prepend(book.valueOf());

});