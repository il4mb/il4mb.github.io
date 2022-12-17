import { Language } from "./language.js";

window.addEventListener('load', () => {

    let Lang = new Language();
    Lang.addString("welcome").setValue("en", "WELCOME TO MY PORTOFOLIO").setValue("id", "SELAMAT DATANG DI PORTOFOLIO SAYA");
    Lang.addString("intro").setValue("en", "INTRODUCE").setValue("id", "PERKENALKAN");
    Lang.addString("name-is").setValue("en", "MY NAME IS ").setValue("id", "NAMA SAYA ADALAH ");
    Lang.addString("student-of").setValue("en", " IM STUDENT OF ").setValue("id", " SAYA MAHASISWA DARI ");
    Lang.addString("majored").setValue("en", " MAJORED ").setValue("id", " JURUSAN ");
    Lang.addString("im-is").setValue("en", "I'm is a full-stack web and mobile developer").setValue("id", "Saya adalah seorang pengembang full-stack web dan seluler");
    Lang.addString("last-project").setValue("en", "LAST PROJECT").setValue("id", "PROJEK TERAKHIR");

    Lang.addString("").setValue("en", "").setValue("id", "");

    // E => { return Lang.getString(E, "intro"); }

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
                                inner: E => { return Lang.getString(E, 'welcome'); }
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
                    DOM("h2", {
                        inner: E => { return Lang.getString(E, "intro"); }
                    }),

                    DOM("p", {
                        attr: { class: "ms-3" },
                        inner: [

                            DOM("span", {
                                inner: (E) => { return Lang.getString(E, 'name-is'); }
                            }),

                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: "ILHAM B"
                            }),

                            DOM("br"),
                            DOM("i", {
                                attr: { class: "fa-solid fa-graduation-cap" }
                            }),

                            DOM("span", {
                                inner: (E) => { return Lang.getString(E, 'student-of'); }
                            }),

                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: 'STMIK AMIK RIAU'
                            }),

                            DOM("br"),
                            DOM("i", {
                                attr: { class: "fa-solid fa-laptop-code" }
                            }),
                            DOM("span", {
                                inner: (E) => { return Lang.getString(E, 'majored'); }
                            }),
                            DOM("span", {
                                attr: { class: "fw-bold text-primary" },
                                inner: [
                                    'TEKNIK INFORMATIKA',
                                    DOM('i', {
                                        inner: " &#8212; Technical Information"
                                    })
                                ]
                            }),
                            DOM("br"), DOM("br"),

                            DOM("a", {
                                attr: { href: "https://github.com/ilh4mb/" },
                                inner: [
                                    DOM("img", {
                                        attr: { width: "100", class: "me-2", src: "https://img.shields.io/badge/-ilh4mb-1db87c?style=for-the-badge&logo=github&logoColor=white&labelColor=3776AB" }
                                    })
                                ]
                            })
                        ]
                        //<i class="fa-solid fa-laptop-code"></i>
                    }),
                ]
            }),

            DOM("h5", {
                attr: { class: "text-center text-warning mt-5 pt-5" },
                inner:  (E) => { return Lang.getString(E, 'im-is'); }
            }),

            // MY SKILS
            DOM('div', {
                attr : {class: "mb-5 pb-5"},
                inner: [

                    DOM("h2", {
                        inner:  (E) => {
                            Lang.addString("skils").setValue("en", "MY SKILS").setValue("id", "SKILS SAYA");
                             return Lang.getString(E, 'skils'); 
                        }
                    }),

                    DOM('div', {
                        attr: { class: "row p-3 m-auto", style: "width: fit-content" },
                        inner: [

                            DOM("div", {
                                attr: { class: "col-sm-4" },
                                inner: [
                                    DOM("img", {
                                        attr: {  src: "https://img.shields.io/badge/-Android-bec8cf?style=for-the-badge&logo=android&logoColor=0091ff" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: {  src: "https://img.shields.io/badge/-CSharp-white?style=for-the-badge&logo=CSharp&logoColor=blue" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: {  src: "https://img.shields.io/badge/-CPANEL-ffa200?style=for-the-badge&logo=cpanel&logoColor=black" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: {  src: "https://img.shields.io/badge/-Python-0077ff?style=for-the-badge&logo=python&logoColor=ffd500" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: {  src: "https://img.shields.io/badge/-PHP-5162bd?style=for-the-badge&logo=php&logoColor=white" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-JavaScript-dbaf27?style=for-the-badge&logo=javascript&logoColor=white" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-Java-ffa600?style=for-the-badge&logo=java&logoColor=white" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-Sass-ff006f?style=for-the-badge&logo=sass&logoColor=white" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-CSS-00aad9?style=for-the-badge&logo=css&logoColor=white" }
                                    })
                                ]
                            }),
                        ]
                    })
                ]
            }),

            // CURENT PROJECT
            DOM("div", {
                attr: { class: "mt-5 mb-5 pb-5 pt-5" },
                inner: [
                    DOM("h2", {
                        inner: DOM("span", {
                            inner: (E) => { return Lang.getString(E, 'last-project'); }
                        }),
                    }),

                    DOM('div', {
                        attr: { class: "row p-3 m-auto", style: "width: fit-content" },
                        inner: [

                            DOM("div", {
                                attr: { class: "col-sm book" },
                                inner: [
                                    DOM("img", {
                                        attr: { width: "150px", src: "https://img.shields.io/badge/OPEN-BINARY-red?style=for-the-badge&&logoColor=black&labelColor=blue" }
                                    }),
                                    DOM("p", {
                                        attr: { class: "mt-3" },
                                        inner: [
                                            DOM("span", {
                                                inner: (E) => {

                                                    Lang.addString("open-binary-desc").setValue("en", "Open Binary is a simple code to add and subtract binary numbers").setValue("id", "Open Binary adalah kode sederhana untuk menambah dan mengurangi bilangan biner");
                                                    return Lang.getString(E, 'open-binary-desc');
                                                }
                                            }),
                                            DOM("br"),
                                            DOM("a", {
                                                attr: { href: "https://ilh4mb.github.io/Open-Binary/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-CalculatorBinary-brightgreen" }
                                                    })
                                                ]
                                            }),
                                            DOM("a", {
                                                attr: { href: "https://github.com/ilh4mb/Open-Binary/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-Repository-1db87c?logo=github&logoColor=white&labelColor=3776AB" }
                                                    })
                                                ]
                                            })
                                        ]
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
                                        inner: [

                                            DOM("span", {
                                                inner: (E) => {

                                                    Lang.addString("marapi-desc").setValue("en", "Marapi is a Content Management System").setValue("id", "Marapi adalah CMS Sistem Pengelolaan Konten");
                                                    return Lang.getString(E, 'marapi-desc');
                                                }
                                            }),

                                            DOM('br'),
                                            DOM("a", {
                                                attr: { href: "https://github.com/ilh4mb/Marapi-CMS/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-Repository-1db87c?logo=github&logoColor=white&labelColor=3776AB" }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),

            // STORY LINE
            DOM("div", {
                attr: { class: "mt-5 mb-5 pb-5 pt-5" },
                inner: [
                    DOM('h2', {
                        inner: E => {
                            Lang.addString("story-life").setValue("en", "LIFE STORY").setValue("id", "CERITA HIDUP");
                            return Lang.getString(E, 'story-life');
                        }
                    }),

                    DOM("div", {
                        attr: { class: 'list' },
                        inner: [

                            DOM("p", {
                                inner: E => {

                                    Lang.addString('s-1')
                                        .setValue('en', "Born in Pekanbaru 1998")
                                        .setValue('id', 'Lahir di pekanbaru 1998');
                                    return Lang.getString(E, 's-1');

                                }
                            }),

                            DOM("p", {
                                inner: E => {

                                    Lang.addString('s-2')
                                        .setValue('en', "2002 Move to Sumatera Barat")
                                        .setValue('id', '2002 Pindah ke Sumatera Barat');
                                    return Lang.getString(E, 's-2');

                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-3')
                                        .setValue('en', "Getting interested in electronics and learning about how electronics work 2008")
                                        .setValue('id', 'Mulai tertarik dengan elektronika dan mempelajari cara kerja elektronika 2008');
                                    return Lang.getString(E, 's-3');

                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-4')
                                        .setValue('en', "2010 I started to get to know the world of the internet and created my first email account")
                                        .setValue('id', "2010 Saya mulai mengenal dunia internet dan membuat akun email pertama saya");
                                    return Lang.getString(E, 's-4');

                                }
                            }),

                            DOM("p", {
                                inner: E => {
                                    Lang.addString('s-5')
                                        .setValue('en', "Passed elementry school in 2012 at sumatera barat")
                                        .setValue('id', "Lulus SD tahun 2012 di sumatera barat");
                                    return Lang.getString(E, 's-5');
                                }
                            }),

                            DOM("p", {
                                inner: E => {

                                    Lang.addString('s-6')
                                        .setValue('en', "2012 Choosing not to continue school and work at a young age in Jakarta")
                                        .setValue('id', "2012 Memilih tidak melanjutkan sekolah dan bekerja di usia muda di Jakarta");
                                    return Lang.getString(E, 's-6');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-7')
                                        .setValue('en', "I started to know Wordpress and Blogger 2013")
                                        .setValue('id', "Saya mulai mengenal Wordpress dan Blogger 2013");
                                    return Lang.getString(E, 's-7');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-8')
                                        .setValue('en', "Frustrated with the pressure and I moved to Malaysia in 2014 and worked in a restaurant owned by my older sister Azzlind.sdn.bhd")
                                        .setValue('id', "Frustrasi dengan tekanan dan saya pindah ke Malaysia pada tahun 2014 dan bekerja di restoran milik kakak perempuan saya Azzlind.sdn.bhd");
                                    return Lang.getString(E, 's-8');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-9')
                                        .setValue('en', "Get to know the world of programming and learn HTML 2016")
                                        .setValue('id', "Mengenal dunia pemrograman dan belajar HTML 2016");
                                    return Lang.getString(E, 's-9');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-10')
                                        .setValue('en', "2017 I was frustrated because of work pressure and decided to return to Indonesia and continue my schooling. I returned to Pekanbaru, my hometown")
                                        .setValue('id', "2017 saya frustasi karena tekanan pekerjaan dan memutuskan untuk kembali ke Indonesia dan melanjutkan sekolah saya. Saya kembali ke Pekanbaru, kampung halaman saya");
                                    return Lang.getString(E, 's-10');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-11')
                                        .setValue('en', "Continue junior high school at SPNF SKB PEKANBARU CITY 2018")
                                        .setValue('id', "Lanjut SMP di SPNF SKB KOTA PEKANBARU 2018");
                                    return Lang.getString(E, 's-11');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-12')
                                        .setValue('en', "2018 I started actively learning HTML, PHP and JavaScript")
                                        .setValue('id', "2018 saya mulai giat belajar HTML, PHP dan JavaScript");
                                    return Lang.getString(E, 's-12');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-13')
                                        .setValue('en', "Graduated from Middle School in 2019")
                                        .setValue('id', "Lulus SMP pada tahun 2019");
                                    return Lang.getString(E, 's-13');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-14')
                                        .setValue('en', "2019 Started working as a CIMB Niaga ATM operator under the auspices of PT.MKMA")
                                        .setValue('id', "2019 Mulai bekerja sebagai operator ATM CIMB Niaga di bawah naungan PT.MKMA");
                                    return Lang.getString(E, 's-14');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-15')
                                        .setValue('en', "Continuing my education to high school, being a student while being a worker 2019")
                                        .setValue('id', "Melanjutkan pendidikan ke SMA, menjadi pelajar sekaligus menjadi pekerja 2019");
                                    return Lang.getString(E, 's-15');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-16')
                                        .setValue('en', "2020 I made my first website by renting hosting CPanel")
                                        .setValue('id', "2020 saya membuat website pertama saya dengan menyewa hosting CPanel");
                                    return Lang.getString(E, 's-16');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-17')
                                        .setValue('en', "Starting to know Node.js, React.js java, python, C, C++ and C# but I'm only interested in java, C#, C++, Node.js and React.js 2021")
                                        .setValue('id', "Mulai mengenal Node.js, React.js java, python, C, C++ dan C# tapi saya hanya tertarik dengan java, C#, C++, Node.js dan React.js 2021");
                                    return Lang.getString(E, 's-17');
                                }
                            }),

                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-18')
                                        .setValue('en', "2022 Graduated from high school and I decided to continue studying at STMIK AMIK RIAU")
                                        .setValue('id', "2022 Lulus SMA dan saya memutuskan untuk melanjutkan kuliah di STMIK AMIK RIAU");
                                    return Lang.getString(E, 's-18');
                                }
                            }),
                            DOM('p', {
                                inner: E => {

                                    Lang.addString('s-18')
                                        .setValue('en', "Learn python in college 2022")
                                        .setValue('id', "Belajar python di kampus 2022");
                                    return Lang.getString(E, 's-18');
                                }
                            }),
                            DOM('p', {
                                inner: E => {
                                    Lang.addString('s-19')
                                        .setValue('en', "until now")
                                        .setValue('id', "sampai sekarang");
                                    return Lang.getString(E, 's-19');
                                }
                            }),
                        ]
                    })
                ]
            }),

            // LANGUAGE SWICTH
            DOM("div", {
                attr: { class: "fixed bottom right above" },
                inner: [
                    DOM('img', {
                        attr: {
                            class: "me-3 mb-3 flag",
                            src: "./asset/vector/flags/gb.svg",
                            title: "read in English"
                        },
                        todo: E => {
                            E.addEventListener('click', () => {
                                Lang.switchLang('en');
                            })
                        }
                    }),

                    DOM('img', {
                        attr: {
                            class: "me-3 mb-3 flag",
                            src: "./asset/vector/flags/id.svg",
                            title: "read in Indonesian"
                        },
                        todo: E => {
                            E.addEventListener('click', () => {
                                Lang.switchLang('id');
                            })
                        }
                    })
                ]
            })
        ]
    });

    document.body.prepend(book.valueOf());

});