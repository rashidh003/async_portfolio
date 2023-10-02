

async function initialDomLoader(){
    const response = await fetch("./src/home.html");
    const data = await response.text();
    return data;
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

