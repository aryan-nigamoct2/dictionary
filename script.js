let json;

const fetchData = async (query)=>{
    let headers = {
        'X-Api-Key': 'VRYmLn36UG6w7fQOFjoL7A==IpzDB9gkwSip9WMM'
    };
    let fetchedData  = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${query}`, {headers});
    json = await fetchedData.json();
}

function update(){
    document.getElementById("word").innerHTML = json.word;
    if(json.definition==''){
        document.getElementById("meaning").innerHTML = "Defnition not found";
    }
    else{
        document.getElementById("meaning").innerHTML = json.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
    }
}

document.getElementById("btn").addEventListener('click', async ()=>{
    await fetchData(document.getElementById("search").value);
    update()
})