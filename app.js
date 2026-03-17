"use strict";

console.log("Hello Everyone!");

//Global Variables for getting elements by ID//
const output = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

 let pages = 2;
 const itemsPerPage = 20;
 const setPages = (pageNum)=>{
    pages = pageNum;
 }
//Get data from the Rick & Morty API//
async function getData(url) {
    try {
        const res = await fetch(url)

        if(res.status !== 200){
            throw new Error("Failed to fetch")
        }

        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error) 
    }
}

//Render Function & Output//
function render({results}){
    console.log("Loading...Fetching your info")
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

      output.textContent = ""
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
