var productName=document.getElementById("productNameInput");
var productPrice=document.getElementById("productPriceInput");
var productCategory=document.getElementById("productCategoryInput");
var productDesc=document.getElementById("productDescInput");
var addBtn= document.getElementById("add");
var productsContainer;
var currentindex=0;
//get data from inputs form and collect it on array and display it in display function
addBtn.addEventListener("click",function(){
  if(addBtn.innerHTML=="Add"){
    addProduct();
  }
  else{
    saveupdate();
  }
})
function addProduct(){
  var product={
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value
  
  }
productsContainer.push(product);

displayProduct();
clearForm();
}
function displayProduct(){
   var cont=" ";
  for(var i=0;i<productsContainer.length;i++){
  cont+=`<tr><td>${productsContainer[i].name}</td> 
  <td>${productsContainer[i].price}</td>
   <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td>
  </tr>`
  }

   document.getElementById("tableBody").innerHTML=cont;
}
/////

function clearForm(){
  productName.value="";
  productPrice.value=" ";
  productCategory.value=" ";
  productDesc.value=" ";


}
////////////////////////////////////////////////////////////
//add data in local storage and get from it

if(localStorage.getItem("myproducts")==null){
  productsContainer=[];

}
else
{
 
  productsContainer= JSON.parse(localStorage.getItem("myproducts"));
  displayProduct();
}
function addProduct(){
  var product={
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value
  
  }
productsContainer.push(product);
console.log(typeof productsContainer)
localStorage.setItem("myproducts",JSON.stringify(productsContainer));
displayProduct();
clearForm();
}
function displayProduct(){
   var cont=" ";
  for(var i=0;i<productsContainer.length;i++){
  cont+=`<tr><td>${productsContainer[i].name}</td> 
  <td>${productsContainer[i].price}</td>
   <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td>
    <td><buton id="updatebtn" class="btn btn-warning " onclick="updateproducts(${i})">Update</buton></td>
    <td><buton id="deletebtn" class="btn btn-danger"  onclick="deleteproducts(${i})">delete</buton></td>
  </tr>`
  }

   document.getElementById("tableBody").innerHTML=cont;
}


function clearForm(){
  productName.value="";
  productPrice.value=" ";
  productCategory.value=" ";
  productDesc.value=" ";


}
function searchInput(term){
var catrona="";
var cartona2="";
for(var i=0;i<productsContainer.length;i++){
 if(productsContainer[i].name.includes(term) == true){
 catrona+=`<tr><td>${productsContainer[i].name}</td> 
 <td>${productsContainer[i].price}</td>
  <td>${productsContainer[i].category}</td>
   <td>${productsContainer[i].desc}</td>
   <td><buton id="updatebtn" class="btn btn-warning">Update</buton></td>
   <td><buton id="deletebtn" class="btn btn-danger"  onclick="deleteproducts(${i})">delete</buton></td>
 </tr>`;
 newtxt = productsContainer[i].name.replace(term ,`<span style="color:red">${term}</span>`)
 cartona2+=`<p>${newtxt }</p>`;
 }
 document.getElementById("tableBody").innerHTML=catrona;
 document.getElementById("searchresult").innerHTML=cartona2;
}


}
function updateproducts(index){
currentindex=index;
    productName.value=productsContainer[index].name;
   productPrice.value=productsContainer[index].price;
    productCategory.value=productsContainer[index].category;
    productDesc.value=productsContainer[index].desc;
    addBtn.innerHTML="Update"
    

}

function saveupdate(){


  var product={
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value
  
  }
productsContainer[currentindex]=product;

localStorage.setItem("myproducts",JSON.stringify(productsContainer));
displayProduct();

clearForm();
addBtn.innerHTML="Add";
}

function deleteproducts(index){

  productsContainer.splice(index,1);
  localStorage.setItem("myproducts",JSON.stringify(productsContainer));
  displayProduct();


}
// var x= document.getElementById("img");
// document.body.addEventListener('click',function(e){

//  x.style.top = e.clientY +'px';


// })