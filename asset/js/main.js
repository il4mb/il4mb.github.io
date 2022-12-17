
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
                                attr: { class: "fw-bold text-warning" },
                                inner: "ILHAM B"
                            }) +

                            "![n]" +
                            DOM("i", {
                                attr: { class: "fa-solid fa-graduation-cap" }
                            }) +
                            " IM STUDENT OF " +
                            DOM("span", {
                                attr: { class: "fw-bold text-warning" },
                                inner: 'STMIK AMIK RIAU'
                            }) +

                            "![n]" +
                            DOM("i", {
                                attr: { class: "fa-solid fa-laptop-code" }
                            }) +
                            " MAJORING " +
                            DOM("span", {
                                attr: { class: "fw-bold text-warning" },
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
                attr: {class: "text-center mt-5 mb-5"},
                inner: "I am a full-stack web developer and mobile developer"
            }),

            DOM("div", {
                inner: [
                    DOM('h4', {
                        inner: "MY STORY LINE"
                    }),

                    DOM("div", {
                        attr : {class: 'lines'},
                        inner: [

                            DOM("p", {
                                inner : "Born in Pekanbaru 1998"
                            }),

                            DOM("p", {
                                inner : "Move to Sumatera Barat 2002"
                            }),

                            DOM('p', {
                                inner: "2008 getting interested in electronics and learning about how electronics work"
                            }),

                            DOM('p', {
                                inner: "2010 I started to get to know the world of the internet and created my first email account"
                            }),

                            DOM("p", {
                                inner : "Passed elementry school in 2012 at sumatera barat"
                            }),
                            
                            DOM("p", {
                                inner : "Do not continue school and work at a young age in Jakarta in 2022"
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