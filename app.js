"use strict";

console.log("Hello Everyone!");

//Global Variables for getting elements by ID//
const outpput = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


let page = 1
const itemsPerPage = 20;

//Get data from the Rick & Morty API//
async function getData(url) {
    try {
        const res = await fetch(url)

        if(res.status !== 200){
            throw new Error("Failed to fetch")
        }

        const info = await res.json()
        return info;
    } catch (error) {
        console.error(error) 
    }
}

function render(){
    console.log("Loading fetching your info")
}

//Main Function//
async function main() {
    try {
        //Get data on page load//
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + page);

        console.log("Ready to fetch")
        prev.addEventListener("click", async()=>{
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + page);
        console.log(info)
        render()
        })

        next.addEventListener("click", async()=>{
        const info = await getData("https://rickandmortyapi.com/api/character/?page" + page);
        console.log(info)
        render()
        })

    } catch (error) {
        
    }
}
main()
