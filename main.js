// ---- Exercise 1 ----


// const italy = {
//     nome: 'Repubblica Italiana',
//     bandiera: {
//         colori: ['rosso', 'bianco', 'verde'],
//         stileStrisce: 'verticale',
//         aspectRatio: 16/9,
//         url: 'https://clipground.com/images/italy-flag-png-7.png',
//         creatore: {
//             nome: 'pippo',
//             età: 87,
//             sesso: 'm',
//             pantaloni: {
//                 marca: 'levis',
//                 taglia: 'l',
//             }
//         }
//     },
//     currency: 'euro',
//     popolazione: 50000000,
//     lingua: 'italiano',
//     famousFor: 'food',
//     urlMappa: 'https://ontheworldmap.com/italy/map-of-italy.jpg',
//     primoMinistro: {
//         nome:'Giorgia',
//         sesso: 'f',
//         età: 46,
//     }
// };

// window.addEventListener('load', () => {

//     const numToString = (obj) => {

//         const entries = Object.entries(obj);
        
//         for (let i = 0; i < entries.length; i ++) {

//             const entry = entries[i];

//             const key = entry[0];

//             const value = entry[1];

//             switch (typeof value) {

//                 case 'number' :

//                     obj[key] = `${value}`;

//                     break;

//                 case 'object' :

//                     numToString(value);
//             }

//         }
//     }

//     numToString(italy);

//     console.log(italy);
// })





// ---- Exercise 2 ----


// window.addEventListener ('load', () => {

//     const inp = document.getElementById('inp');

//     const btn = document.getElementById('btn');

//     const result = document.getElementById('result');

// //     btn.addEventListener ('click', () => {

// //         const userNum = Math.round(inp.valueAsNumber);

// //         let fact = 1;

// //         const factorial = (n) => {

// //             fact = fact * n;

// //             if (n > 1) {

// //                 factorial(n - 1);
// //             }

// //             return fact;
// //         }

// //         result.innerHTML = `The Factorial of ${userNum} is ${factorial(userNum)}`

// //         inp.value = null;
// //     })
// // })





// // ---- Exercise 3 ----


const italy = {
    nome: 'Repubblica Italiana',
    bandiera: {
        colori: ['rosso', 'bianco', 'verde'],
        stileStrisce: 'verticale',
        aspectRatio: 16/9,
        url: 'https://clipground.com/images/italy-flag-png-7.png',
        creatore: {
            nome: 'pippo',
            età: 87,
            sesso: 'm',
            pantaloni: {
                marca: 'levis',
                taglia: 'l',
                lunghezza: 60,
            },
        },
    },
    currency: 'euro',
    popolazione: 50000000,
    lingua: 'italiano',
    famousFor: 'food',
    urlMappa: 'https://ontheworldmap.com/italy/map-of-italy.jpg',
    primoMinistro: {
        nome:'Giorgia',
        sesso: 'f',
        età: 46,
    }
}

const objToHtml = (obj) => {

    const isArray = Array.isArray(obj);

    const type = isArray ? 'ol' : 'ul';

    const list = document.createElement(type);

    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i ++) {

        const key = keys[i];

        const value = obj[key];

        const li = document.createElement('li');

        li.innerHTML = isArray? '' : `${key}:`;

        if (typeof value !== 'object') {

            li.innerHTML += value;
        }

        else {

            const list = objToHtml(value);

            li.appendChild(list);

        }

        list.appendChild(li);
    }

    return list;
}

window.addEventListener ('load', () => {

    const body = document.body;

    const listObj = objToHtml(italy);

    body.appendChild(listObj);

 })



