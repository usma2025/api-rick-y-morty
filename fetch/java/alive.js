//Alive
function consumeData2(){
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        let html=''
        let i = 0
        let icon = ''
        let estado = ''
        data.results.map((character) =>{
            if(character.status=="Alive"){  
            //genero(character.gender)
            if(character.gender == "Male" ){
                icon='<i class="fa-solid fa-mars"></i>'
            }
            else if(character.gender == "Female"){
                icon='<i class="fa-solid fa-venus"></i>'
            }   
            
            if(character.status == "Alive"){
                estado='green'
            }
            else if(character.status =="Dead"){
                estado='red'
            }
            else if(character.status =="unknown"){
                estado='gray'
            }
            

            i= character.episode.length
            html += `<article key="${character.name}" class="listCharacters--character">
            <div class="listCharacters--character-container">
                <img src="${character.image}" alt"${character.name}"/>
                <div class="listCharacters--character-container-2">
                    <i class="fa-solid fa-circle" id="${estado}"></i>                        
                    <h1>${character.name}</h1>
                    <p><i class="fa-solid fa-location-pin"></i> Ubicacion: ${character.location.name}</p>
                    <p> Apariciones: ${i}</p>
                    ${icon} 
                    
                </div>
            </div>                   
            </article>`
        }
        })
        
        document .getElementById('listCharacters').innerHTML = html
    })
    .catch((err)=>{
        console.info(err)
    })
    
}