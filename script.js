let recipes  = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];


const menuToggle = document.querySelector('.menu-toggle');
const mobileDrawer = document.querySelector('.mobile-drawer');
function openMobileDrawer() {
  mobileDrawer.classList.add('active');
}

function closeMobileDrawer() {
  mobileDrawer.classList.remove('active');
}

function handleOutsideClick(event) {
  if (!mobileDrawer.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMobileDrawer();
  }
}

menuToggle.addEventListener('click', () => {
  if (mobileDrawer.classList.contains('active')) {
    closeMobileDrawer();
  } else {
    openMobileDrawer();
  }
});

const mobileNavLinks = document.querySelectorAll('.mobile-drawer a');
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', closeMobileDrawer);
});

document.addEventListener('click', handleOutsideClick);




// JavaScript code for generating recipe cards
var recipeCardsContainer = document.querySelector(".items");
const allRecipes =  document.querySelector(".all-recipes")
const onlyVeg =  document.querySelector(".all-veg-recipes")
const nonVeg =  document.querySelector(".all-nonveg-recipes")
const fourandabove =  document.getElementById("4andabove")
const below4 =  document.getElementById("below4")


let filteredRecipes = recipes
filteredRecipes.forEach(function(recipe) {
  var card = document.createElement("div");
  card.classList.add("recipe-card");

  var image = document.createElement("img");
  image.classList.add("recipe-image");
  image.src = recipe.imageSrc;
  image.alt = recipe.name;

  var name = document.createElement("h4");
  name.classList.add("recipe-name");
  name.textContent = recipe.name;

  var details = document.createElement("div");
  details.classList.add("recipe-details");

  var type = document.createElement("span");
  type.classList.add("recipe-type");
  type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";

  var time = document.createElement("span");
  time.classList.add("recipe-time");
  time.textContent = recipe.time;

  var ratings = document.createElement("div");
  ratings.classList.add("recipe-ratings");

  var like = document.createElement("div");
  like.classList.add("recipe-like");
  like.innerHTML = '<i class="fas fa-heart"></i>';

  var stars = document.createElement("div");
  stars.classList.add("recipe-stars");

  // Add star icons based on the recipe's rating
  var rating = recipe.rating;
  for (var i = 1; i <= 5; i++) {
      var star = document.createElement("i");
      star.classList.add("fas", "fa-star");
      if (i <= Math.floor(rating)) {
          star.classList.add("filled");
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
          star.classList.add("half-filled");
      }
      stars.appendChild(star);
  }

  var comment = document.createElement("div");
  comment.classList.add("recipe-comment");
  comment.innerHTML = '<i class="fas fa-comment"></i>';

  details.appendChild(type);
  details.appendChild(document.createTextNode(" | "));
  details.appendChild(time);

  ratings.appendChild(like);
  ratings.appendChild(stars);

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(ratings);
  card.appendChild(comment);

  recipeCardsContainer.appendChild(card);
});
allRecipes.addEventListener('click', ()=>{
  console.log("fetching all");
  recipeCardsContainer.innerHTML = "";

   filteredRecipes = recipes
   filteredRecipes.forEach(function(recipe) {
    var card = document.createElement("div");
    card.classList.add("recipe-card");
  
    var image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;
  
    var name = document.createElement("h4");
    name.classList.add("recipe-name");
    name.textContent = recipe.name;
  
    var details = document.createElement("div");
    details.classList.add("recipe-details");
  
    var type = document.createElement("span");
    type.classList.add("recipe-type");
    type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
  
    var time = document.createElement("span");
    time.classList.add("recipe-time");
    time.textContent = recipe.time;
  
    var ratings = document.createElement("div");
    ratings.classList.add("recipe-ratings");
  
    var like = document.createElement("div");
    like.classList.add("recipe-like");
    like.innerHTML = '<i class="fas fa-heart"></i>';
  
    var stars = document.createElement("div");
    stars.classList.add("recipe-stars");
  
    // Add star icons based on the recipe's rating
    var rating = recipe.rating;
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        if (i <= Math.floor(rating)) {
            star.classList.add("filled");
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            star.classList.add("half-filled");
        }
        stars.appendChild(star);
    }
  
    var comment = document.createElement("div");
    comment.classList.add("recipe-comment");
    comment.innerHTML = '<i class="fas fa-comment"></i>';
  
    details.appendChild(type);
    details.appendChild(document.createTextNode(" | "));
    details.appendChild(time);
  
    ratings.appendChild(like);
    ratings.appendChild(stars);
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(details);
    card.appendChild(ratings);
    card.appendChild(comment);
  
    recipeCardsContainer.appendChild(card);
  });
})


onlyVeg.addEventListener('click', ()=>{
  console.log("fetching veg");
   filteredRecipes = recipes.filter((recipe)=>{
    return recipe.type=="veg";
});
recipeCardsContainer.innerHTML = "";

filteredRecipes.forEach(function(recipe) {
  var card = document.createElement("div");
  card.classList.add("recipe-card");

  var image = document.createElement("img");
  image.classList.add("recipe-image");
  image.src = recipe.imageSrc;
  image.alt = recipe.name;

  var name = document.createElement("h4");
  name.classList.add("recipe-name");
  name.textContent = recipe.name;

  var details = document.createElement("div");
  details.classList.add("recipe-details");

  var type = document.createElement("span");
  type.classList.add("recipe-type");
  type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";

  var time = document.createElement("span");
  time.classList.add("recipe-time");
  time.textContent = recipe.time;

  var ratings = document.createElement("div");
  ratings.classList.add("recipe-ratings");

  var like = document.createElement("div");
  like.classList.add("recipe-like");
  like.innerHTML = '<i class="fas fa-heart"></i>';

  var stars = document.createElement("div");
  stars.classList.add("recipe-stars");

  // Add star icons based on the recipe's rating
  var rating = recipe.rating;
  for (var i = 1; i <= 5; i++) {
      var star = document.createElement("i");
      star.classList.add("fas", "fa-star");
      if (i <= Math.floor(rating)) {
          star.classList.add("filled");
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
          star.classList.add("half-filled");
      }
      stars.appendChild(star);
  }

  var comment = document.createElement("div");
  comment.classList.add("recipe-comment");
  comment.innerHTML = '<i class="fas fa-comment"></i>';

  details.appendChild(type);
  details.appendChild(document.createTextNode(" | "));
  details.appendChild(time);

  ratings.appendChild(like);
  ratings.appendChild(stars);

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(ratings);
  card.appendChild(comment);

  recipeCardsContainer.appendChild(card);
});
})


//for non veg
nonVeg.addEventListener('click', ()=>{
  console.log("fetching non veg");
  recipeCardsContainer.innerHTML = "";
   filteredRecipes = recipes.filter((recipe)=>{
    return recipe.type=="non-veg";
});
})


fourandabove.addEventListener('click', ()=>{
  if(fourandabove.checked){
    console.log("fetching above rating 4");
    recipeCardsContainer.innerHTML = "";
    filteredRecipes = recipes.filter((recipe)=>{
      return recipe.rating >=4;
   });
  }
  filteredRecipes.forEach(function(recipe) {
    var card = document.createElement("div");
    card.classList.add("recipe-card");
  
    var image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;
  
    var name = document.createElement("h4");
    name.classList.add("recipe-name");
    name.textContent = recipe.name;
  
    var details = document.createElement("div");
    details.classList.add("recipe-details");
  
    var type = document.createElement("span");
    type.classList.add("recipe-type");
    type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
  
    var time = document.createElement("span");
    time.classList.add("recipe-time");
    time.textContent = recipe.time;
  
    var ratings = document.createElement("div");
    ratings.classList.add("recipe-ratings");
  
    var like = document.createElement("div");
    like.classList.add("recipe-like");
    like.innerHTML = '<i class="fas fa-heart"></i>';
  
    var stars = document.createElement("div");
    stars.classList.add("recipe-stars");
  
    // Add star icons based on the recipe's rating
    var rating = recipe.rating;
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        if (i <= Math.floor(rating)) {
            star.classList.add("filled");
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            star.classList.add("half-filled");
        }
        stars.appendChild(star);
    }
  
    var comment = document.createElement("div");
    comment.classList.add("recipe-comment");
    comment.innerHTML = '<i class="fas fa-comment"></i>';
  
    details.appendChild(type);
    details.appendChild(document.createTextNode(" | "));
    details.appendChild(time);
  
    ratings.appendChild(like);
    ratings.appendChild(stars);
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(details);
    card.appendChild(ratings);
    card.appendChild(comment);
  
    recipeCardsContainer.appendChild(card);
  });


})

below4.addEventListener('click', ()=>{
  if(below4.checked){
    console.log("fetching below rating 4");
    recipeCardsContainer.innerHTML = "";
    filteredRecipes = recipes.filter((recipe)=>{
      return recipe.rating <4;
   });
  }
  filteredRecipes.forEach(function(recipe) {
    var card = document.createElement("div");
    card.classList.add("recipe-card");
  
    var image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;
  
    var name = document.createElement("h4");
    name.classList.add("recipe-name");
    name.textContent = recipe.name;
  
    var details = document.createElement("div");
    details.classList.add("recipe-details");
  
    var type = document.createElement("span");
    type.classList.add("recipe-type");
    type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
  
    var time = document.createElement("span");
    time.classList.add("recipe-time");
    time.textContent = recipe.time;
  
    var ratings = document.createElement("div");
    ratings.classList.add("recipe-ratings");
  
    var like = document.createElement("div");
    like.classList.add("recipe-like");
    like.innerHTML = '<i class="fas fa-heart"></i>';
  
    var stars = document.createElement("div");
    stars.classList.add("recipe-stars");
  
    // Add star icons based on the recipe's rating
    var rating = recipe.rating;
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        if (i <= Math.floor(rating)) {
            star.classList.add("filled");
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            star.classList.add("half-filled");
        }
        stars.appendChild(star);
    }
  
    var comment = document.createElement("div");
    comment.classList.add("recipe-comment");
    comment.innerHTML = '<i class="fas fa-comment"></i>';
  
    details.appendChild(type);
    details.appendChild(document.createTextNode(" | "));
    details.appendChild(time);
  
    ratings.appendChild(like);
    ratings.appendChild(stars);
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(details);
    card.appendChild(ratings);
    card.appendChild(comment);
  
    recipeCardsContainer.appendChild(card);
  });
})






document.querySelectorAll(".recipe-like").forEach(function(likeButton) {
  likeButton.addEventListener("click", function() {
      var likeImage = likeButton.querySelector("img");
      if (likeImage.getAttribute("alt") === "Unlike Icon") {
          likeImage.setAttribute("src", "assets/like.png");
          likeImage.setAttribute("alt", "Like Icon");
      } else {
          likeImage.setAttribute("src", "assets/unlike.png");
          likeImage.setAttribute("alt", "Unlike Icon");
      }
  });
});



var searchInput = document.querySelector(".search-input");

searchInput.addEventListener('keyup', ()=>{
  var searchText = searchInput.value.toLowerCase();

  // Filter the recipes based on the search text
  const filteredRecipes = recipes.filter((recipe)=>{
      return recipe.name.toLowerCase().includes(searchText);
  });

  // Clear the recipe cards container
  recipeCardsContainer.innerHTML = "";

  filteredRecipes.forEach(function(recipe) {
    var card = document.createElement("div");
    card.classList.add("recipe-card");
  
    var image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;
  
    var name = document.createElement("h4");
    name.classList.add("recipe-name");
    name.textContent = recipe.name;
  
    var details = document.createElement("div");
    details.classList.add("recipe-details");
  
    var type = document.createElement("span");
    type.classList.add("recipe-type");
    type.textContent = recipe.type === "veg" ? "Veg" : "Non-Veg";
  
    var time = document.createElement("span");
    time.classList.add("recipe-time");
    time.textContent = recipe.time;
  
    var ratings = document.createElement("div");
    ratings.classList.add("recipe-ratings");
  
    var like = document.createElement("div");
    like.classList.add("recipe-like");
    like.innerHTML = '<i class="fas fa-heart"></i>';
  
    var stars = document.createElement("div");
    stars.classList.add("recipe-stars");
  
    // Add star icons based on the recipe's rating
    var rating = recipe.rating;
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        if (i <= Math.floor(rating)) {
            star.classList.add("filled");
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            star.classList.add("half-filled");
        }
        stars.appendChild(star);
    }
  
    var comment = document.createElement("div");
    comment.classList.add("recipe-comment");
    comment.innerHTML = '<i class="fas fa-comment"></i>';
  
    details.appendChild(type);
    details.appendChild(document.createTextNode(" | "));
    details.appendChild(time);
  
    ratings.appendChild(like);
    ratings.appendChild(stars);
  
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(details);
    card.appendChild(ratings);
    card.appendChild(comment);
  
    recipeCardsContainer.appendChild(card);
  });
})









