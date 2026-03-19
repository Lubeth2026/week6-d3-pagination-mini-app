"use strict";

console.log("Hello Everyone!");

//Global Variables for getting elements by ID//
const output = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let page = 1;
const setPages = (pageNum) => {
  pages = pageNum;
};
 
//Get data from the Rick & Morty API//
async function getData(url) {
  try {
    const res = await fetch(url)
    if(res.status === 403){
      throw new Error(
        "Access Forbidden (403). Maybe the Council of Ricks blocked this page.",
      );
    }
    
    const data = await res.json()
    return data;
  } catch (error) {
    console.error(error) 
  }
}

//Render Function & Output//
function render({results}){
      output.textContent = ""
  results.forEach(function (info) {
      console.log(info);
      const id = document.createElement("id");
      id.textContent = "ID: " + info.id
      console.log(info.id);
      const name = document.createElement("name");
      name.textContent = "Name: " + info.name;
      console.log(info.name);
      const status = document.createElement("status");
      status.textContent = "Status: " + info.status;
      console.log(info.status)
      const species = document.createElement("species");
      species.textContent = "Species: " + info.species;
      console.log(info.species)
      
      const img = document.createElement("img")
      if (info.image) {
        img.src = info.image;
      } else {
        img.src = "https://placehold.co/100";
      }
      img.alt = info.name

      
      output.appendChild(id);
      output.appendChild(name);
      output.appendChild(status);
      output.appendChild(species);
      output.appendChild(img);
    });
}

//Main Function//
async function main() {
    try {
        //Get data on page load//
        const info = await getData("https://rickandmortyapi.com/api/character/?page=" + page);
        render(info)
        console.log("Ready to fetch")

        prev.addEventListener("click", async()=>{
          if(page > 1){
            page--;
            prev.disabled = page === 1;
          }
        const info = await getData("https://rickandmortyapi.com/api/character/?page=" + page);
        console.log(info)
        render(info)
        })

        next.addEventListener("click", async()=>{
          page++;
        const info = await getData("https://rickandmortyapi.com/api/character/?page=" + page);
        console.log(info)
        render(info)
        })

    } catch (error) {
      console.log("This line will never run anyway");  
    }
    
    }
main()
