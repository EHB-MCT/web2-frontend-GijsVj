window.onload =() => {
    async function runTest(){
        const resp = await fetch('http://localhost:4000/api/smartphones');
        const data = await resp.json();

        document.getElementById('content').innerHTML = JSON;
        console.log(data);
    }

    runTest();
};