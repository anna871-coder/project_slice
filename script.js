function pageload() {

    /* 
    Todoo feladat:
    Load függvényben legyen 10 sor,
    minden sorban checkbox, hogy elkészült a feladat,
    mellette egy szöveg mező, amin beírhatunk valamit,
    minden sorban törlés gomb,
    10 elemből álljon a lista, de bővíthető legyen új feladat hozzáadása gombbal 
    
    0. pont: egy változóba eltároljuk a root elemet
    1. Egy változóba beleírjuk backtick-kel azt az egy sornyi html kódunkat, amiben
        - van egy div, 
            -egy checkbox input,
            -button, ráírva: delete, melyre ráteszünk egy delete class nevet,*/

    const rootE = document.getElementById("root");
    /*     console.log(rootE); */

    let row = `
        <div class="line">
         <input class="checkbox" type="checkbox"></input>
         <input placeholder="Feladat"></input>
         <button class="delete">Delete</button>
        </div>
    `;

    /*2. Változóba elmenteni a 10-es számot,*/

    let itemNumber = 10;
    /*     console.log(itemNumber.length); */
    /* 3. For ciklussal elszámolunk 0-tól 10-ig, insertAddajsentHTML-el létrehozunk 10 db másolatot a létrehozott sorból, beforeend-del, mert a div-en belül akarjuk létrehozni */

    for (let index = 0; index < itemNumber; index++) {
        rootE.insertAdjacentHTML("beforeend", row);
    }
    /*4. Új feladat ltérehozása gomb: add gomb hozzáadása a root elementen kívülre insertadjesentHTML-lel, 4 pozíciója közül afterend-et kell beállítani rá*/
    rootE.insertAdjacentHTML("afterend", ` 
     <button id="addItem">Add row</button>
    `);

    /*
      5. Click eseményt rátenni a gombra, a gombnak legyen id-ja, 
      getElementByID(id).addEventListener("click", ): a fent említett változót még egyszer hozzáadja a root elemhez, amiben benne van a html kódunk */

    function addNewItem() {
        rootE.insertAdjacentHTML("beforeend", row);
        //TODO Valahogy itt kéne rátenni az új elemre is a törlés függvényt
    }

    document.getElementById("addItem").addEventListener("click", addNewItem);



    /*6. Ki kell jelölni az összes törlés gombot, 
        ha valamelyikre kattintunk, azt a sort töröljük ki:
        -mentsük el querySelectorral az összes sor törlés gombját
        - for ciklussal menjünk végig a tömbön, tömb hosszúságát vesszük alapul, mindegyikre rakjunk rá egy click eseményt, amihez készítünk egy függvényt*/

    let deleteButtons = rootE.querySelectorAll(".delete");
    /*    console.log(deleteButtons); */

    function deleteItem(e) {
        /*     console.log("deleteButton clicked")
            console.log(e.target.parentElement); */
        e.target.parentElement.remove();
    }

    /*7. Elkészített függvényben a törlés gomb befoglaló sorát kitöröljük
    */
   for (let index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", deleteItem);

}

}

window.addEventListener("load", pageload)