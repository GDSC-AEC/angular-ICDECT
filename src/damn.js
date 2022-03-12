const scene = theaterJS({ minSpeed: 60 });
const body = document.querySelector('body');
const bg = document.querySelector('.m-background');
const images = Array.from(document.querySelectorAll('.m-background__inner'));


function slider() {
    const offsets = [];

    function setStage() {
        for (let i = 0; i < images.length; i++) {
            const offset = i * 100;
            offsets.push(offset);
            images[i].style.transform = `translateX(${offset}vw)`;
        }
    }


    function goTo(num) {
        console.log(num);
        for (let i = 0; i < offsets.length; i++) {
            const offset = offsets[i] - (num * 100);
            images[i].style.transform = `translateX(${offset}vw)`;
        }
    }

    setStage();

    return { goTo };
}

slider();

scene
    .on('type:start, erase:start', () => {
    // add a class to actor's dom element when he starts typing/erasing
        const actor = scene.getCurrentActor();
        actor.$element.classList.add('is-typing');
    })
    .on('type:end, erase:end', () => {
    // and then remove it when he's done
        const actor = scene.getCurrentActor();
        actor.$element.classList.remove('is-typing');
    });

scene.addActor('oscar', { accuracy: 0.8, speed: 0.8 });
// 6th International Conference
// On Data Engineering and Communication Technology

scene
    // .addScene('arden:Hey...', 300)
    // .addScene('arden:Hola...', 300)
    // .addScene('arden:Hello...', 300)
    .addScene('oscar: 6<sup>th</sup> International Conference <span class="underline--magical"></span>')
    .addScene((done) => {
        bg.classList.add('is-active');
        document.querySelector('span').style.color = '#fff';
        setTimeout(() => {
            document.querySelector('span').style.color = '#000';
            bg.classList.add('is-shrunken');
        }, 900);
        setTimeout(() => {
            done();
        }, 1300);
    })
    .addScene('<br/>on <span class="lisbon underline--magical">Data Engineering and Communication Technology</span>')
    .addScene((done) => {
        setTimeout(() => {
            bg.classList.remove('is-shrunken');
            slider().goTo(1);
        }, 300);

        setTimeout(() => {
            bg.classList.add('is-shrunken');
            done();
        }, 1200);
    })
    .addScene((done) => {
        // goTo(0);
        done();
    });

/* otb */
// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
// 4. Function to get data from API
const getData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async(url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

/* playing around with
https://codepen.io/aderaaij/pen/yzeydd
*/