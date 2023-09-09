
async function initialDomLoader(){
    const response = await fetch("./src/about.html");
    const data = await response.text();
    return data;
}

function rotate() {
    const box = document.querySelector('.box');
    box.classList.add('rotate-y-180');
}

function backRotate() {
    const box = document.querySelector('.box');
    box.classList.remove('rotate-y-180');
}



document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const right = document.querySelector('#right');

    initialDomLoader().then((data)=>{
        right.innerHTML = data;
    })

    links.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = e.target.id;
            
            try {
                const response = await fetch(`./src/${id}.html`);
                if (response.status === 200) {
                    const data = await response.text();
                    right.innerHTML = data;
                } else {
                    alert(`Error: ${response.status}`);
                }
            } catch (error) {
                alert(`Fetch error: ${error}`);
            }
        });
    });
});

