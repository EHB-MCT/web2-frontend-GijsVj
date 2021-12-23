function getPhone(){
    fetch(`https://api-mobilespecs.azharimm.site/v2/samsung_galaxy_s20_fe_5g-10377`)
    .then(response => response.json())
    .then(data => {
        console.log("succes",data);
            
        let containerInfo = document.getElementById("container");
        let htmlString = 
                `<h2>${data.data.brand}: ${data.data.phone_name}</h2>
                <div class="flex-row">
                    <img class="result-image" src="${data.data.thumbnail}" alt="result">
                    <div class="aspects">
                        <p>The aspects that you found important:</p>
                        <ul>
                            <li>Long battery</li>
                            <li>Good camera</li>
                            <li>Nice screen</li>
                            <li>Price below €800</li>
                        </ul>
                    </div>
                    <div>
                        <a href="index.html"><button id="nextButton">Retake test</button></a>
                    </div>
                </div>`;
                
        
        containerInfo.insertAdjacentHTML('beforeend', htmlString);

    });
}

getPhone();


