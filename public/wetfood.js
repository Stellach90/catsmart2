

document.styleSheets[1].disabled = true;

  
  const products = [
    {
    imgsrc :`img/can1.jpg`,
    name: `CRAVE™ Perfect Portions Adult Cat Food`,
    discription: `Real chicken is the first ingredient, and this protein-rich recipe provides cats with energy and supports lean bodies`,
    priceSale: 1.99,
    priceRegular: `2.11`,
    qty:785,
    category: `plastic container`
  },
  {
    imgsrc :`img/can2.jpg`,
    name: `Authority® Advanced Wellness Shredded`,
    discription: `This delicious wet food features the great taste of chicken in each and every bite`,
    priceSale: 1.19,
    priceRegular: `1.99`,
    qty:245,
    category: `plastic container`
  },
  {
    imgsrc :`img/can3.jpg`,
    name: `Royal Canin® Feline Health Nutrition`,
    discription: `A uniquely balanced blend of vitamins and minerals promotes your pet's optimal health and wellness`,
    priceSale: 1.89,
    priceRegular: `1.99`,
    qty:115,
    category: `pouch`
  },
  {
    imgsrc :`img/can4.jpg`,
    name: `Wellness® CORE® Tiny Tasters Wet Cat Food`,
    discription: `Based on the nutritional philosophy that cats, given their primal ancestry, thrive on a diet mainly comprised of meat`,
    priceSale: 1.99,
    priceRegular: `2.19`,
    qty:635,
    category: `pouch`
  },
  {
    imgsrc :`img/can5.jpg`,
    name: `Simply Nourish® Pate Wet Adult Cat Food`,
    discription: `Perfect choice nutritionally for your adult cat`,
    priceSale: 2.35,
    priceRegular: `2.55`,
    qty:635,
    category: `can`
  },
  {
    imgsrc :`img/can6.jpg`,
    name: `Simply Nourish® Kitten Chicken Stew`,
    discription: `Simply Nourish® Shreds & Flake Stew Wet Cat Food - Natural, Grain Free`,
    priceSale: 1.99,
    priceRegular: `2.05`,
    qty:735,
    category: `plastic container`
  },
  {
    imgsrc :`img/can7.jpg`,
    name: `Only Natural Pet® 5 Ingredient Soup Cat Food Topper`,
    discription: `You won't find any grains, thickeners or artificial ingredients in these tasty items! `,
    priceSale: 5.49,
    priceRegular: `5.99`,
    qty:35,
    category: `plastic container`
  },
  {
    imgsrc :`img/can8.jpg`,
    name: `Iams® Perfect Portions`,
    discription: `Healthy Kitten Food`,
    priceSale: 1.04,
    priceRegular: `1.24`,
    qty:455,
    category: `plastic container`
  },
  {
    imgsrc :`img/can9.jpg`,
    name: `Beyond® Grain Free Adult Cat Food`,
    discription: `Duck is the #1 ingredient in this wet cat food, and it's accented with wholesome vegetables, including sweet potatoes and carrots`,
    priceSale: 1.59,
    priceRegular: `2.55`,
    qty:965,
    category: `can`
  },
  {
    imgsrc :`img/can10.jpg`,
    name: `Merrick® Backcountry ™ Pate Adult`,
    discription: `This delicious food is made using all-natural ingredients you can feel good about serving your cat`,
    priceSale: 3.39,
    priceRegular: `3.39`,
    qty:25,
    category: `can`
  },
  {
    imgsrc :`img/can11.jpg`,
    name: `Simply Nourish® SOURCE ™ Meal Topper`,
    discription: `Natural, High Protein, Grain Free`,
    priceSale: 1.79,
    priceRegular: `1.89`,
    qty:735,
    category: `pouch`
  },
  {
    imgsrc :`img/can12.jpg`,
    name: `HALO® Lil Bub Wet Cat Food Variety Pack`,
    discription: `Halo has partnered with the most amazing cat on the planet`,
    priceSale: 6.39,
    priceRegular: `7.99`,
    qty:955,
    category: `can`
  },
  {
    imgsrc :`img/can13.jpg`,
    name: `Nature's Variety® Instinct® Limited Ingredient Diet`,
    discription: `Guided by the purity and simplicity of raw, essential nutrition your cat needs to thrive`,
    priceSale: 1.99,
    priceRegular: `2.29`,
    qty:575,
    category: `can`
  },
  {
    imgsrc :`img/can14.jpg`,
    name: `Catit® Chicken Dinner`,
    discription: `Catit Chicken Dinner with Tuna and Kale is a dual-layered wet food, made of fresh ingredients served in luscious gravy`,
    priceSale: 1.69,
    priceRegular: `1.99`,
    qty:45,
    category: `plastic container`
  },
  {
    imgsrc :`img/can15.jpg`,
    name: `Authority® Pate Entree Kitten`,
    discription: `Provide your kitten with the kind of nutritional support and great taste she deserves at mealtime with Authority Entree Kitten Food`,
    priceSale: 0.89,
    priceRegular: `0.99`,
    qty:735,
    category: `can`
  },
  {
    imgsrc :`img/can16.jpg`,
    name: `Nature's Variety® Instinct® Protein®`,
    discription: `This recipe is guided by a belief in raw and packed with 90% protein from real meat, liver and eggs`,
    priceSale: 0.89,
    priceRegular: `1.99`,
    qty:985,
    category: `pouch`
  },
  {
    imgsrc :`img/can17.jpg`,
    name: `Blue Buffalo Wilderness Denali Dinner`,
    discription: `Make meal time delicious and nutritious for your kitty with Blue Buffalo Wilderness Wild Salmon, Venison`,
    priceSale: 2.59,
    priceRegular: `2.89`,
    qty:65,
    category: `can`
  },
  {
    imgsrc :`img/can18.jpg`,
    name: `HALO® Kitten Food`,
    discription: `Halo Grain Free Whitefish Recipe Kitten Food uses WHOLE meat, never any "meat meal" of ANY kind in our natural cat food`,
    priceSale: 2.05,
    priceRegular: `2.09`,
    qty:465,
    category: `can`
  },
  {
    imgsrc :`img/can19.jpg`,
    name: `Nutro Wild Frontier Adult Cat Food`,
    discription: `Natural, grain free`,
    priceSale: 1.59,
    priceRegular: `1.99`,
    qty:345,
    category: `plastic container`
  },
  {
    imgsrc :`img/can20.jpg`,
    name: `Nature's Variety® Instinct® Grain Free`,
    discription: `Feed your adult cat 1-1/2 to 2 bowls per 6 to 8 lb of body weight per day. Refrigerate unused portion.`,
    priceSale: 3.29,
    priceRegular: `3.49`,
    qty:5,
    category: `plastic container`
  }


  ]

  function isInThisCategory(prod) {
    // The variable "this" is filled with the 2nd filter argument
    if (this == 'all') {
      return true;
    } else if (prod.category == this) {
      return true;
    } else {
      return false;
    }
  }

  function isMatchingName(prod) {
    if (prod.name.toUpperCase().includes(this.trim().toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }


  function getProductAsHtmlString(product) {

  let greatdeal;
  if (product.priceSale < 1.50) {
    greatdeal = `<small class="callout urgent">Super deal!</small>`;
  } else {
    greatdeal = `\n`
  }

  let lowstock;
  if (product.qty < 100) {
    lowstock = `<small class="callout urgent2">Low Stock!</small>`;
  } else {
    lowstock = `\n`
  }



    return `<article class="product">
    <div class="productimg"><a href="./product.html">
      <img src="${product.imgsrc}" alt="Product Image"></a>${greatdeal} ${lowstock}</div>
    
    
    <h3><a>${product.name} </a></h3>
    <p>${product.discription}</p>
    <form class="disappear">
      

      <footer>
        <dl>
          <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <div class="buy">
        <data value="${product.priceSale}">
        <del>${product.priceRegular}</del> <ins><strong>${product.priceSale}</strong></ins>
        </data>
        <div><button type="button" onclick = "addOneToCart()" id="addOne"><span class="material-icons">add_shopping_cart</span></button>
        <button type="button" onclick = "addOneToList()" id="addList"><span class="material-icons">favorite</span></button></div>
        </div>
      </footer>
    </form>
  </article>`;
  }




function renderProducts(arrToRender) {
  const arrOfHtmlproducts = arrToRender.map(getProductAsHtmlString);
  const strOfHtmlproducts = arrOfHtmlproducts.join('\n');

  document.getElementById('products').innerHTML = strOfHtmlproducts;
}


function toggleProductLayout(event) {
  document.getElementById('products').classList.toggle('grid-view');
}

function disappear(event){

  document.querySelector('.disappear').style.display = 'none';
}

function loadProductCategory(event) {
  const categoryImSearchingFor = event.target.value;
  renderProducts(products.filter(isInThisCategory, categoryImSearchingFor)); 
}

function loadProductByName(event) {
  const nameImSearchingFor = event.target.value;
  renderProducts(products.filter(isMatchingName, nameImSearchingFor));
}


renderProducts(products);


// 1.
// document.getElementById('toggleView').addEventListener('click', function(e) { 
//   const tgt = e.target; 
//   if (tgt.classList.contains("toggleView")) {
//     const parent = this.closest("form");
//     parent.querySelector(".disappear").style.display="none";
//     parent.querySelector("#products").classList.toggle('grid-view'); }
//   })



// 2.
// document.getElementById('toggleView').addEventListener('click',()=>{
//   if(document.getElementById('products').classList='grid-view'){
//     document.querySelector('.disappear').style.display='none'
//   }else{
//     document.querySelector('.disappear').style.display='block'
//   }
  
// } 
// )
 

// Original!!!!
document.getElementById('toggleView').addEventListener('click', toggleProductLayout);
document.getElementById('courseCategory').addEventListener('change', loadProductCategory);
document.getElementById('search').addEventListener('input', loadProductByName);





let numItemsInCart = 0;

function addOneToCart() {
    numItemsInCart += 1;
    document.getElementById(`cartNum`).innerHTML = `${numItemsInCart}`;
}

document.getElementById(`addOne`).addEventListener('click', addOneToCart);


function addOneToList(){
  document.getElementById(`listNum`).innerHTML = `favorite`;
  alert(`1 item added to Wish List`)
}

document.getElementById(`addList`).addEventListener('click',addOneToList);




// var items = document.getElementsByClassName('item');
// var dim = document.querySelector('html');

// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener('mouseover', function () {
//     this.style.opacity = '1';
//     dim.style.opacity = '0.5';
//     });
//     items[i].addEventListener('mouseleave', function () {
//       dim.style.backgroundColor = 'white';
//     });
// }



// document.getElementById('pagevalue').onclick = function(){
//   var name = document.getElementById('pagevalue').innerHTML
//   document.getElementById('pagetitle').innerHTML = name;
// }
