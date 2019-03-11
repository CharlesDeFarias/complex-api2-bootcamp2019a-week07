document.querySelector('form').addEventListener('submit',alGen)
function alGen(e){
  e.preventDefault();
  let artist= document.querySelector('#artist').value;
  fetch(`http://www.theaudiodb.com/api/v1/json/1/discography.php?s=${artist}`)
    .then(response=> response.json())
    .then(response => {
      let albumRes= response.album;
      albumRes.forEach(album=>{
        const titleElement=document.createElement("li"),
        addElement= document.getElementById("albumList");
        titleElement.textContent= album.strAlbum;
        addElement.appendChild(titleElement)
      })
  document.querySelector('li').addEventListener('click',alInfo)
    //Need to find out how to make it so when I click on an album, it's inserted into the second fetched api url. So need to make a click event that clicks list items that don't exist until they're generated and then have that value go into the fetch url.
    //let albumName = 
    function alInfo(){
    fetch(`http://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}&a=${albumName}`)
      .then(response=> response.json())
      .then(response => {
        console.log(albumName)

      })
    }

    })
    .catch(err=>{
      console.error(err.message)
    })
}
