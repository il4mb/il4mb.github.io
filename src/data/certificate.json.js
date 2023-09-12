import c1 from "../assets/images/Codecademy-1.jpg";
import c2 from "../assets/images/Dicoding-1.jpg";
import c3 from "../assets/images/Dicoding-2.jpg";
import c4 from "../assets/images/Dicoding-3.jpg";
import c5 from "../assets/images/Dicoding-4.jpg";
import c6 from "../assets/images/PKKMB.jpg";
import c7 from "../assets/images/Baba-1.jpg";
import c8 from "../assets/images/OracleA-1.jpg";
import c9 from "../assets/images/IBMI-1.jpg";

import o1 from "../assets/images/organization/Amik-Riau.png";

const organization = {
    "dicoding": {
        "name": "Dicoding",
        "logo": "https://avatars.githubusercontent.com/u/22091590?s=280&v=4"
    },
    "codecademy": {
        "name": "Codecademy",
        "logo": "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515403_10914.png"
    },
    "amik-riau": {
        "name": "STMIK AMIK RIAU",
        "logo": o1
    },
    "oracle": {
        "name": "Oracle",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oracle_Corporation_logo.svg/1200px-Oracle_Corporation_logo.svg.png"
    },
    "baba": {
        "name": "Baba Studio",
        "logo": "https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/2132096ac3b89902b8c0f488e1a5ee54.png"
    },
    "ibmi": {
        "name": "International Business Management Institute",
        "logo": "https://www.ibm-institute.com/wp-content/uploads/2017/12/newlogofb.png"
    }
}

module.exports = [
    {
        "name": "Full-Stack Engineer Carrer Path",
        "organization": organization.codecademy,
        "issuingdate": "Sep 2023",
        "expirationdate": "",
        "credential": "",
        "file": c1
    },
    {
        "name": "Basic Project Management",
        "organization": organization.ibmi,
        "issuingdate": "Sep 2023",
        "expirationdate": "",
        "credential": "",
        "file": c9
    },
    {
        "name": "Pemrograman Dengan C",
        "organization": organization.dicoding,
        "issuingdate": "Feb 2023",
        "expirationdate": "Feb 2026",
        "credential": "",
        "file": c2
    },
    {
        "name": "Belajar Prinsip Pemograman Solid",
        "organization": organization.dicoding,
        "issuingdate": "Feb 2023",
        "expirationdate": "Feb 2026",
        "credential": "",
        "file": c3
    },
    {
        "name": "Belajar Dasar Pemograman Dengan JavaScript",
        "organization": organization.dicoding,
        "issuingdate": "Feb 2023",
        "expirationdate": "Feb 2026",
        "credential": "",
        "file": c4
    },
    {
        "name": "Membuat Aplikasi Backend untuk Pemula",
        "organization": organization.dicoding,
        "issuingdate": "Feb 2023",
        "expirationdate": "Feb 2026",
        "credential": "",
        "file": c5
    },
    {
        "name": "PKKMB",
        "organization": organization["amik-riau"],
        "issuingdate": "Sep 2022",
        "expirationdate": "",
        "credential": "",
        "file": c6
    },
    {
        "name": "Implementasi Modren Website React.js",
        "organization": organization.baba,
        "issuingdate": "Sep 2022",
        "expirationdate": "",
        "credential": "",
        "file": c7
    },
    {
        "name": "Java Fundamental",
        "organization": organization.oracle,
        "issuingdate": "Jul 2023",
        "expirationdate": "",
        "credential": "",
        "file": c8
    },

]