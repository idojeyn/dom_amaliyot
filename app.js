const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        seriesDB.count = +prompt("nechta serial kordingiz?", '')

        while (
            seriesDB.count == "" ||
            seriesDB.count == null ||
            isNaN(seriesDB.count)
        ) {
            seriesDB.count = +prompt("nechta serial kordingiz?", '')
        }
    },
    setSeries: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`oxirgi korgan serialingiz ${i + 1}?`, '')
            const b = prompt(`necha baxo berasiz ?${i + 1}`, '')

            if (a !== null && b !== null && a !== '' && b !== '') {
                seriesDB.series[a] = b
            } else {
                i--
            }
        }
    },
    detectingLevel: function () {
        if (seriesDB.count < 5) {
            console.log(`siz kam serial koribsiz`);
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log(`siz classik tomoshabin ekansiz`);
        } else if (seriesDB.count >= 10) {
            console.log(`siz serialchi zvezda ekansiz`);
        }
    },
    visibleDB: function () {
        if (seriesDB.private) {
            seriesDB.private = true
        } else {
            seriesDB.private = false
        }
    },
    shovDb: function () {
        if (!seriesDB.private) {
            console.log(seriesDB);
        } else {
            console.log(`ma'lumotlar maxfiy saqlanmoqda`)
        }
    },
    writeGenres: function () {
        //#1
        // for (let i = 0; i < 1; i++) {
        //     const genre = prompt(`yaxshi korgan janringiz?${i + 1}`, '')
        //     if (genre === '' || genre === null) {
        //         i--
        //     } else {
        //         seriesDB.genres[i] = genre
        //     }

        // }
        //#2
        let genres = prompt(`yaxshi korgan janringizni ',' yordamida yozing😊`, '')

        while (genres == '' || genres == null) {
            genres = prompt(`yaxshi korgan janringizni ',' yordamida yozing😊`, '')
        }
        if (genres) {
            seriesDB.genres = genres.split(',')
            seriesDB.genres.sort()
        }
    }
}
const btn = document.querySelector('#btn')
