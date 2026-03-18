"use strict";

console.log("Hello Everyone!");

//Global Variables for getting elements by ID//
const output = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let pages = 2;
const itemsPerPage = 20;
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
    results.forEach(function (info) {
      console.log(info);
      const h2 = document.createElement("h2");
      h2.textContent = "Loading Fetching Results...."
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

      output.textContent = ""
      output.appendChild(h2);
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
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + pages);
        console.log("Ready to fetch")

        prev.addEventListener("click", async()=>{
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + pages);
        console.log(info)
        render(info)
        })

        next.addEventListener("click", async()=>{
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + pages);
        console.log(info)
        render(info)
        })

    } catch (error) {
      console.log("This line will never run anyway");  
    }
}
main()
