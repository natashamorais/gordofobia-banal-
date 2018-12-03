
function typewriter(screenText) {
           const string = screenText.innerHTML.split("")
          screenText = " "
    
        string.forEach( (item, index)  => {

            console.log(item)
            setTimeout ( () => screenText.innerHTML=+ item, 500 * index )
        })
    }


    const text = document.querySelector('h1')
    window.addEventListener("load", function(event){
        typewriter(text)

    })
        
   
    