document.querySelector('form').addEventListener('submit',alGen)
function alGen(e){
  e.preventDefault();
  let artist= document.querySelector('#artist').value;
  fetch(`http://www.theaudiodb.com/api/v1/json/1/discography.php?s=${artist}`)
    .then(response=> response.json())
    .then(response => {
      console.log(response)
      let albumRes= response.album;
      albumRes.forEach(album=>{
        const titleElement=document.createElement("li"),
        addElement=document.querySelector("ul");
        titleElement.textContent= album.strAlbum;
        addElement.appendChild(titleElement)
      })
    let albumName= document.querySelectorAll('li');
    albumName.forEach(al=>al.addEventListener('click',alInfo))
    function alInfo(){
      let albVar = this.innerText
    fetch(`http://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}&a=${albVar}`)
      .then(response=> response.json())
      .then(response => {
        let term = (response.album[0].strWikipediaID );
        wiki(term);
      })
    }
    })
    .catch(err=>{
      console.error(err.message)
    })
    function wiki(x){
      title= x;
  fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${title}&format=json`)
  .then(res => res.json())
  .then(response =>{
    console.log(response)
    if(response[2][0] === [] || response[2][0] === '' || response[2][0]==="null"){
          document.querySelector('p').textContent = 'No results, sorry. Wikipedia aint hip';
        }else{
          let description = response[2][0]
          document.querySelector('p').textContent = description;
        }
      })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
}
