var head= document.createElement("H1");
 head.className="head";
 head.innerHTML="Beautify";
 head.style.textAlign="center";

 var srch=document.createElement("div");
 srch.style.textAlign="right";
 var input=document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("id","brand");

 var button=document.createElement("button");
 button.setAttribute("type","button");
 button.classList.add("btn","btn-danger");
 button.innerHTML="search";
 button.style.marginRight="5px"
 button.addEventListener("click",find);

 let product=document.createElement("div");
 product.setAttribute("id","product");

 srch.append(input,button,product);



var container=document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.className="row";
container.append(row);

async function find(){
// var res = document.getElementById("brand").value;

// {/* <a href="${makeup1[i].product_link}" class="btn btn-primary">Buy</a> */}


}

 
async function getdata(){
    var makeup= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    var makeup1= await makeup.json();
        console.log(makeup1);
    for(var i=0;i<makeup1.length;i++){
    try {
        // console.log(`Brand name: ${makeup1[i].brand} Product name: ${makeup1[i].name}`);
// created element :
        // var container1 = document.createElement("div");
        // container1.innerHTML=`Brand name: ${makeup1[i].brand} Product name: ${makeup1[i].name}`;
        // var btn =document.createElement("button");
        // btn.innerHTML=`Price : ${makeup1[i].price_sign} ${makeup1[i].price}`;
        // container1.append(btn);
        // document.body.append(container1);
        // document.body.style.backgroundColor="pink";
        row.innerHTML+= `<div class="col-sm-4">
        <div class="card" style="width: 15rem;">
        <img src="${makeup1[i].image_link}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${makeup1[i].name}</h5>
          <p class="card-text">${makeup1[i].brand} </p>
          <p class="card-text">Price: ${makeup1[i].price_sign}${makeup1[i].price}</p>
          <div class="btn-group">
            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Info
            </button>
            <div class="dropdown-menu p-4 text-muted" style="max-width: 200px;">
            <p>${makeup1[i].description}</p> 
            </div>
          </div>
          <a href="${makeup1[i].product_link}" class="btn btn-primary">Buy</a>
        </div>
      </div>
        </div>`
        document.body.append(head,srch,container);
        document.body.style.backgroundColor="pink";
   
        }
    
    catch (error){
        console.log(error);
         }
         
        }
    }
getdata();