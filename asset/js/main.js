
window.addEventListener('load', () => {

    let book = DOM('div', {

        attr : {class: "container-sm"},
        inner: [

            DOM('div', {
                attr : {class: "welcome-screen"},
                inner: [

                    DOM("div", {
                        attr : {class: "floating-center"},
                        inner : [
                            DOM('h1', {
                                inner: "WELCOME TO MY PORTOFOLIO"
                            }),
        
                            DOM("img", {
                                attr : {class: "w-100 mt-5",  src: "./asset/vector/welcome-gif.gif"}
                            })
                        ]
                    })

                ]
            })
            //<iframe src="https://giphy.com/embed/l0HlHFRbmaZtBRhXG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/colbertlateshow-stephen-colbert-welcome-late-show-l0HlHFRbmaZtBRhXG">via GIPHY</a></p>
        ]
    });

    document.body.prepend(book);

});