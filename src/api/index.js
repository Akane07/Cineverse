export const query = (url) => {
    const q = 'https://api.kinopoisk.dev/v1.4' + url;

    console.log(q);

    return new Promise((resolve, reject) => {
        fetch(q, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'RAZXV98-N4WM71P-JRWHZ60-1885E24',
            },
        }).then(
            res => res.json()
        ).then(json => {
            resolve(json)
        })
    })
}