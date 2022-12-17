export class Language {

    constructor() {
        this.strings = {};
        this.lang = "en";
        this.caller = [];
    }

    addString(key) {
        return {

            setValue: (lang, text) => {

                if (this.strings[lang] == null) {
                    this.strings[lang] = [];
                }
                this.strings[lang][key] = text;

                return this.addString(key);
            }
        };
    }

    getString(caller, key) {

        if (caller) {
            caller.langKey = key;
            this.caller.push(caller);
        }

        return this.strings[this.lang][key];
    }

    switchLang(lang) {

        let currentLang = this.lang;
        this.lang = lang;

        this.caller.forEach(E => {

            let key = E.langKey;
            E.innerHTML = E.innerHTML.replace(this.strings[currentLang][key], this.strings[this.lang][key])
        })
    }
}