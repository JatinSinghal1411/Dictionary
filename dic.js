        const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
        const sound=document.getElementById("sound");
        const btn=document.getElementById("btn");
        let result=document.getElementById("result");

        btn.addEventListener("click",()=>{
            let inputval=document.getElementById("text-inp").value;
            fetch(`${url}${inputval}`)
            .then((response)=>response.json())
            .then((data) => {
            console.log(data);
            result.innerHTML=`
            <div class="word">
                <h2>${inputval}</h2>
                <button onclick="playSound()";><i class="fa-solid fa-volume-high"></i></button>
                </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic || ""}/</p>
            </div>
            <p id="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p id="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>`;

            sound.setAttribute("src",`${data[0].phonetics[0].audio}`|| `${data[0].phonetics[1].audio}`);
            })
            .catch(()=>{
                result.innerHTML=`<h2 class="error">Couldn't find the word</h2>`;
            })
        });
        function playSound(){
            sound.play();
        }