export class Language {

    constructor(...listLanguageCode) {

        this.strings = {};
        listLanguageCode.forEach(E => {
            this.strings[E] = {};
        });

        this.lang = "en";
        this.caller = [];
        this.langKey = 0;
    }

    addString(strKey, isNew = true) {
        let langs = Object.keys(this.strings);
        if(isNew) this.langKey = 0;

        return {

            setValue: (text) => {

                    this.strings[langs[this.langKey]][strKey] = text;

                    this.langKey += 1;
                    if (this.langKey == langs.length) {
                        this.langKey = 0;
                    }
                return this.addString(strKey, false);
            }
        };
    }

    getString(caller, key) {


        if (caller && !this.caller.includes(caller)) {
            caller.langKey = key;
            this.caller.push(caller);
        }

        let langKey = this.langKey,
            text = this.strings[this.lang][key];

        if (text == null || text == undefined) {

            let keys = Object.keys(this.strings);

            if (keys.length > 0) {
                langKey = keys[0];
            }

            text = this.strings[langKey][key];
        }

        return text;
    }

    setLang(lang) {

        let keys = Object.keys(this.strings);

        this.lang = lang;

        document.documentElement.setAttribute("lang", lang);

        return {

            render: () => {
                this.caller.forEach(E => {

                    let newString = this.strings[this.lang][E.langKey];

                    if (newString == null || newString == undefined) {

                        newString = this.strings[keys[0]][E.langKey];
                    }

                    E.innerHTML = newString;
                });
            }
        };

    }
}