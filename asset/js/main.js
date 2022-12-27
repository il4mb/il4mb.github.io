/**
 * Copyright 2022 ilham B
 *  
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { Language } from "./language.js";

window.addEventListener('load', () => {

    let Lang = new Language('en', 'id', 'mng');
    Lang.setLang('en');


    (() => {
        Lang.addString("welcome")
            .setValue("WELCOME TO MY PORTOFOLIO")
            .setValue("SELAMAT DATANG DI PORTOFOLIO SAYA")
            .setValue("SALAMAIK TIBO DI PORTOFOLIO ADEN")

        Lang.addString("intro")
            .setValue("INTRODUCE")
            .setValue("PERKENALKAN")
            .setValue("PERKENALKAN")

        Lang.addString("name-is")
            .setValue("MY NAME IS ")
            .setValue("NAMA SAYA ADALAH ")
            .setValue("NAMO ADEN ADALAH ")

        Lang.addString("student-of")
            .setValue(" IM STUDENT OF ")
            .setValue(" SAYA MAHASISWA DARI ")
            .setValue(" ADEN MAHASISWA DARI ")

        Lang.addString("majored")
            .setValue(" MAJORED ")
            .setValue(" JURUSAN ")
            .setValue(" JURUSAN ")

        Lang.addString("im-is")
            .setValue("I'm is a full-stack web and mobile developer")
            .setValue("Saya adalah seorang pengembang full-stack web dan seluler")
            .setValue("Aden ko pengembang stack-panuah web samo talepon")

        Lang.addString("last-project")
            .setValue("LAST PROJECT")
            .setValue("PROJEK TERAKHIR")
            .setValue("PROJEK TARAKHIR")

        Lang.addString("open-binary-desc")
            .setValue("Open Binary is a simple code to add and subtract binary numbers")
            .setValue("Open Binary adalah kode sederhana untuk menambah dan mengurangi bilangan binari")
            .setValue("Open Binary tu kode sederhana untuak manambah samo mangurang angko binari")

        Lang.addString("skils")
            .setValue("MY SKILS")
            .setValue("SKIL SAYA")
            .setValue("SKIL DEN")

        Lang.addString("story-life")
            .setValue("LIFE STORY")
            .setValue("CERITA HIDUP")
            .setValue("CARITO IDUIK")

        Lang.addString('s-1')
            .setValue("Born in Pekanbaru 1998")
            .setValue('Lahir di pekanbaru 1998')
            .setValue("Lahie di Pakanbaru 1998")

        Lang.addString('s-2')
            .setValue("2002 Move to Sumatera Barat")
            .setValue('2002 Pindah ke Sumatera Barat')
            .setValue("2022 Pindah ka sumbar")

        Lang.addString('s-3')
            .setValue("Getting interested in electronics and learning about how electronics work 2008")
            .setValue('Mulai tertarik dengan elektronika dan mempelajari cara kerja elektronika 2008')
            .setValue("Mulai suko samo elektronik dan mapalajari caro karajo elektronik 2002")

        Lang.addString('s-4')
            .setValue("2010 I started to get to know the world of the internet and created my first email account")
            .setValue("2010 Saya mulai mengenal dunia internet dan membuat akun email pertama saya")
            .setValue("2010 Aden mulai tau samo internet dan mambuek akun email partamo den")

        Lang.addString('s-5')
            .setValue("Passed elementry school in 2012 at sumatera barat")
            .setValue("Lulus SD tahun 2012 di sumatera barat")
            .setValue("Tamaik SD tahun 2012 di sumatera barat")

        Lang.addString('s-6')
            .setValue("2012 Choosing not to continue school and work at a young age in Jakarta")
            .setValue("2012 Memilih tidak melanjutkan sekolah dan bekerja di usia muda di Jakarta")
            .setValue("2012 Mamiliah untuak indak malajuik'an sekolah dan bakarajo samanjak ketek di Jakarta")

        Lang.addString('s-7')
            .setValue("I started to know Wordpress and Blogger 2013")
            .setValue("Saya mulai mengenal Wordpress dan Blogger 2013")
            .setValue("Aden mulai kenal Wordpress samo Blogger 2013")

        Lang.addString('s-8')
            .setValue("Frustrated with the pressure and I moved to Malaysia in 2014 and worked in a restaurant owned by my older sister Azzlind.sdn.bhd")
            .setValue("Frustrasi dengan tekanan dan saya pindah ke Malaysia pada tahun 2014 dan bekerja di restoran milik kakak perempuan saya Azzlind.sdn.bhd")
            .setValue("Paniang samo takanan dan aden pindah ka Malaysia di tahun 2014 dan bakarajo di restoran punyo akak den Azzlind.sdn.bhd")

        Lang.addString('s-9')
            .setValue("Get to know the world of programming and learn HTML 2016")
            .setValue("Mengenal dunia pemrograman dan belajar HTML 2016")
            .setValue("Kenal samo pemograman dan baraja HTML 2016")

        Lang.addString('s-10')
            .setValue("2017 I was frustrated because of work pressure and decided to return to Indonesia and continue my schooling. I returned to Pekanbaru, my hometown")
            .setValue("2017 Saya frustasi karena tekanan pekerjaan dan memutuskan untuk kembali ke Indonesia dan melanjutkan sekolah saya. Saya kembali ke Pekanbaru, kampung halaman saya")
            .setValue("2017 Aden paniang samo takanan karajo dan mamutuian untuak baliak ka indonesia dan lanjuik'an sekolah den. Aden baliak ka Pakanbaru, kampuang halaman den")

        Lang.addString('s-11')
            .setValue("Continue junior high school at SPNF SKB PEKANBARU CITY 2018")
            .setValue("Lanjut SMP di SPNF SKB KOTA PEKANBARU 2018")
            .setValue("Lanjuik SMP di SPNF SKB KOTA PAKANBARU 2018")

        Lang.addString('s-12')
            .setValue("2018 I started actively learning HTML, PHP and JavaScript")
            .setValue("2018 saya mulai giat belajar HTML, PHP dan JavaScript")
            .setValue("2018 Aden mulai acok balaja HTML, PHP samo JavaScript")

        Lang.addString('s-13')
            .setValue("Graduated from Middle School in 2019")
            .setValue("Lulus SMP pada tahun 2019")
            .setValue("Tamaik SMP di tahun 2019")

        Lang.addString('s-14')
            .setValue("2019 Started working as a CIMB Niaga ATM operator under the auspices of PT.MKMA")
            .setValue("2019 Mulai bekerja sebagai operator ATM CIMB Niaga di bawah naungan PT.MKMA")
            .setValue("2019 Mulai karajo sabagai operator ATM CIMB Niaga di bawah naungan PT.MKMA")

        Lang.addString('s-15')
            .setValue("Continuing my education to high school, being a student while being a worker 2019")
            .setValue("Melanjutkan pendidikan ke SMA, menjadi pelajar sekaligus menjadi pekerja 2019")
            .setValue("Malanjukan pendidikan ka SMA, bakarajo sambie sakolah 2019")

        Lang.addString('s-16')
            .setValue("2020 I made my first website by renting hosting CPanel")
            .setValue("2020 Saya membuat website pertama saya dengan menyewa hosting CPanel")
            .setValue("2020 Aden mambuek website patamo den, den sewa hosting ciek")


        Lang.addString('s-17')
            .setValue("Starting to know Node.js, React.js, java, python, C, C++ and C# but I'm only interested in java, C#, C++, Node.js and React.js 2021")
            .setValue("Mulai mengenal Node.js, React.js, java, python, C, C++ dan C# tapi saya hanya tertarik dengan java, C#, C++, Node.js dan React.js 2021")
            .setValue("Mulai mengenal Node.js, React.js, java, python, C, C++, C# tapi aden hanyo suko samo java, C#, C++, Node.js samo React.js 2021")

        Lang.addString('s-18')
            .setValue("2022 Graduated from high school and I decided to continue studying at STMIK AMIK RIAU")
            .setValue("2022 Lulus SMA dan saya memutuskan untuk melanjutkan kuliah di STMIK AMIK RIAU")
            .setValue("2022 Tamaik SMA dan aden mamutuihkan untuak malanjuik'an kuliah di STMIK AMIK RIAU")

        Lang.addString('s-19')
            .setValue("Learn python in college 2022")
            .setValue("Belajar python di kampus 2022")
            .setValue("Balaja python di kampus 2022")
        Lang.addString('s-20')
            .setValue("until now")
            .setValue("sampai sekarang")
            .setValue("sampai kini")
    })()


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
                                attr: { href: "https://github.com/il4mb/" },
                                inner: [
                                    DOM("img", {
                                        attr: { width: "100", class: "me-2", src: "https://img.shields.io/badge/-ilh4mb-1db87c?style=for-the-badge&logo=github&logoColor=white&labelColor=3776AB" }
                                    })
                                ]
                            }),

                        ]
                    }),
                ]
            }),

            DOM("h5", {
                attr: { class: "text-center text-warning mt-5 pt-5" },
                inner: (E) => { return Lang.getString(E, 'im-is'); }
            }),

            // MY SKILS
            DOM('div', {
                attr: { class: "mb-5 pb-5" },
                inner: [

                    DOM("h2", {
                        inner: (E) => {

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
                                        attr: { src: "https://img.shields.io/badge/-Android-bec8cf?style=for-the-badge&logo=android&logoColor=0091ff" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-CSharp-white?style=for-the-badge&logo=CSharp&logoColor=blue" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-CPANEL-ffa200?style=for-the-badge&logo=cpanel&logoColor=black" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-Python-0077ff?style=for-the-badge&logo=python&logoColor=ffd500" }
                                    })
                                ]
                            }),

                            DOM("div", {
                                attr: { class: "col-sm-4 mt-1" },
                                inner: [
                                    DOM("img", {
                                        attr: { src: "https://img.shields.io/badge/-PHP-5162bd?style=for-the-badge&logo=php&logoColor=white" }
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

                                                    return Lang.getString(E, 'open-binary-desc');
                                                }
                                            }),
                                            DOM("br"),
                                            DOM("a", {
                                                attr: { href: "https://il4mb.github.io/Open-Binary/" },
                                                inner: [
                                                    DOM("img", {
                                                        attr: { class: "me-2", src: "https://img.shields.io/badge/-CalculatorBinary-brightgreen" }
                                                    })
                                                ]
                                            }),
                                            DOM("a", {
                                                attr: { href: "https://github.com/il4mb/Open-Binary/" },
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

                                                    Lang.addString("marapi-desc").setValue("Marapi is a Content Management System").setValue("Marapi adalah CMS Sistem Pengelolaan Konten");
                                                    return Lang.getString(E, 'marapi-desc');
                                                }
                                            }),

                                            DOM('br'),
                                            DOM("a", {
                                                attr: { href: "https://github.com/il4mb/Marapi-CMS/" },
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

                            return Lang.getString(E, 'story-life');
                        }
                    }),

                    DOM("div", {
                        attr: { class: 'list' },
                        inner: [

                            DOM("p", {
                                inner: E => {


                                    return Lang.getString(E, 's-1');

                                }
                            }),

                            DOM("p", {
                                inner: E => {


                                    return Lang.getString(E, 's-2');

                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-3');

                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-4');

                                }
                            }),

                            DOM("p", {
                                inner: E => {

                                    return Lang.getString(E, 's-5');
                                }
                            }),

                            DOM("p", {
                                inner: E => {


                                    return Lang.getString(E, 's-6');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-7');
                                }
                            }),

                            DOM('p', {
                                inner: E => {
                                    return Lang.getString(E, 's-8');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-9');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-10');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-11');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-12');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-13');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-14');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-15');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-16');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-17');
                                }
                            }),

                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-18');
                                }
                            }),
                            DOM('p', {
                                inner: E => {


                                    return Lang.getString(E, 's-19');
                                }
                            }),
                            DOM('p', {
                                inner: E => {

                                    return Lang.getString(E, 's-20');
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
                                Lang.setLang('en').render();
                                toast("English");
                            });
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
                                Lang.setLang('id').render();
                                toast("Indonesia");
                            });
                        }
                    }),

                    DOM('img', {
                        attr: {
                            class: "me-3 mb-3 flag",
                            src: "./asset/vector/flags/mng.svg",
                            title: "read in Minang"
                        },
                        todo: E => {
                            E.addEventListener('click', () => {
                                Lang.setLang('mng').render();
                                toast("Minang");
                            });
                        }
                    })
                ]
            })
        ]
    });

    document.body.prepend(book.valueOf());

});

function toast(text) {

    let toast = (DOM("div", {
        attr: { class: "mToast" },
        inner: text
    })).valueOf();

    document.body.append(toast);

    setTimeout(() => {

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove("show");
            toast.classList.add("close");

            setTimeout(() => toast.remove(), 500);
        }, 3000);

    }, 100);


}
