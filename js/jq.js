function showCategory(category) {
    let allItems = $(".menu-item");
    allItems.removeClass("transition-all duration-1200"); // Sembunyikan semua elemen dengan jQuery
    allItems.addClass("hidden"); // Sembunyikan semua elemen dengan jQuery
    setTimeout(() => { 
        allItems.addClass("scale-5 opacity-0"); // Sembunyikan semua elemen dengan jQuery
    }, 50);

    let selectedItems = $(`.menu-item.${category}`);
    selectedItems.addClass("transition-all duration-1200");
    setTimeout(() => { 
        selectedItems.removeClass("hidden");
    }, 50);
    selectedItems.each(function(i) {
        setTimeout(() => { 
            selectedItems.eq(i).removeClass("scale-5 opacity-0");
        }, 200 * (i+1));
    });

    let buttonOnclick = $("button[onclick]");
    buttonOnclick.eq(0).removeClass("bg-red-600").addClass("bg-red-400"); // Ubah hanya tombol pertama

    buttonOnclick.each(function(index) {
        if (index !== 0) {
            $(this).addClass("text-yellow-600").removeClass("bg-yellow-600");
        }
    });

    let buttonItems = $(`button.${category}`);
    if (category === "makanan" || category === "minuman") {
        buttonItems.removeClass("text-yellow-600").addClass("bg-yellow-600");
    } else {
        buttonItems.removeClass("bg-red-400").addClass("bg-red-600");
    }
}

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    if(wScroll > $('#menu').offset().top - 700 ){
        $('#menu div .best-seller').each(function(i) {
            setTimeout(function() {
                $('#menu div .best-seller').eq(i).removeClass('scale-5 opacity-0');
            }, 500 * (i+1));
        });
    }


    if(wScroll > $('#tentang').offset().top - 350 ){
        $('#tentang div').removeClass('opacity-0');
        $('#tentang div').removeClass('-translate-y-10');
    }
});


// function showCategory(category) {
//     let allItems = document.querySelectorAll(".menu-item");
//     allItems.forEach(item => item.classList.add("hidden")); // Sembunyikan semua
//     //jquery
//     allItems.forEach(item => item.classList.add("scale-5")); // Sembunyikan semua
//     allItems.forEach(item => item.classList.add("opacity-0")); // Sembunyikan semua

    
//     let selectedItems = document.querySelectorAll(`.menu-item.${category}`);
//     selectedItems.forEach(item => item.classList.toggle("hidden")); // Tampilkan kategori yang dipilih
//     // jaquery
//     setTimeout(() => {
//     selectedItems.forEach(item => item.classList.remove("scale-5")); // Tampilkan kategori yang dipilih
//     selectedItems.forEach(item => item.classList.remove("opacity-0")); // Tampilkan kategori yang dipilih
//     }, 300);

//     let buttonOnclick = document.querySelectorAll("button[onclick]");
//     buttonOnclick.forEach((button, index) => {
//     // Hanya ubah tombol dengan indeks lebih dari 0
//     buttonOnclick[0].classList.remove("bg-red-600");
//     buttonOnclick[0].classList.add("bg-red-400");
//     if (index !== 0) {
//         button.classList.add("text-yellow-600");
//         button.classList.remove("bg-yellow-600");
//     }
//     });

//     let buttonItems = document.querySelector(`button.${category}`);
//     if (category == "makanan" || category == "minuman") {
//     buttonItems.classList.remove("text-yellow-600");
//     buttonItems.classList.add("bg-yellow-600");
//     } else {
//     buttonItems.classList.remove("bg-red-400");
//     buttonItems.classList.add("bg-red-600");
//     }
// }