var calegory_template, animals_template, animal_template, category_breadcrumb_template, animal_breadcrumb_template, category_breadcrumb_a_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function showMenu(template, data){
	var html    = template(data);
	$('#menu').html(html);
}

function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

function showCategoryBreadcrumb(template, data){
	var html    = template(data);
	$('.category-breadcrumb-content').html(html);
}

function showAnimalBreadcrumb(template, data){
	var html    = template(data);
	$('#animal-breadcrumb-content').html(html);
}

$(document).ready(function(){

  var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);

  source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

  source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	source   = $("#category-breadcrumb-template").html();
	category_breadcrumb_template = Handlebars.compile(source);

	source   = $("#animal-breadcrumb-template").html();
	animal_breadcrumb_template = Handlebars.compile(source);

	source   = $("#category-breadcrumb-a-template").html();
	category_breadcrumb_a_template = Handlebars.compile(source);

  function ShowMenuOnScreen () {

    showMenu(category_template, animals_data);

    $(".category-thumbnail").click(function (){

      var item = $(this).data("cat");

      current_category = animals_data.category[item];

			  $('[data-cat="0"]').removeClass("active");
				$('[data-cat="1"]').removeClass("active");
				$('[data-cat="2"]').removeClass("active");

				$("[data-cat="+item+"]").addClass("active");

				console.log(item);

      showTemplate(animals_template, current_category);
			showCategoryBreadcrumb(category_breadcrumb_template, current_category);


      $(".animal-thumbnail").click(function (){

        var index = $(this).data("id");

        current_animal = current_category.animals[index];

        showTemplate(animal_template, current_animal);

				showCategoryBreadcrumb(category_breadcrumb_a_template, current_category);
				showAnimalBreadcrumb(animal_breadcrumb_template, current_animal);

				$('[data-cat="0"]').removeClass("active");
				$('[data-cat="1"]').removeClass("active");
				$('[data-cat="2"]').removeClass("active");

				$(".category-breadcrumb-content").click(function (){
				  $("[data-cat="+item+"]").click();
				});

			});
		});
	};

  $("#animals-tab").click(function () {

    showTemplate(animals_template, current_category);

    $(".animal-thumbnail").click(function (){

      var index = $(this).data("id");

      current_animal = current_category.animals[index];

      showTemplate(animal_template, current_animal);
		});
	});

  ShowMenuOnScreen();
	$('[data-cat="0"]').click();

});
