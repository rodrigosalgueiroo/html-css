const vi = document.querySelector('.vi')
const pipe = document.querySelector('.pipe')

const jump = () => {
    vi.classList.add('jump');

    setTimeout(() => {

        vi.classList.remove('jump');

    },500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const viPosition = +window.getComputedStyle(vi).bottom.replace('px', '');
    
    if (pipePosition <= 73 && pipePosition > 0 && viPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        vi.style.animation = 'none';
        vi.style.bottom = `${viPosition}px`

        vi.src = 'vi.png'
        vi.style.width = '75px'
        vi.style.marginLeft = '50px'

        clearInterval(loop)


    }

},10)

document.addEventListener('keydown', jump)