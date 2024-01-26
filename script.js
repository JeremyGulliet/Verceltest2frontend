fetch('https://vercel-test-2-five.vercel.app/year')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#year').textContent = data.year;
            
        });