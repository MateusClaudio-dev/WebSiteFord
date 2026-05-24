//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(imagem,texto,link){
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
      
    static Start(arr){
        if(arr&&arr.length > 0){
            Carousel._arr = arr;
            Carousel._index = 0;
            //Carousel.Next(); //start
            Carousel.Render();
            Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
        }

    }

    static Render() {
        const carouselDiv = document.getElementById("carousel");
        const textoDiv = document.getElementById("carousel-title");
        const atual = Carousel._arr[Carousel._index];

        carouselDiv.innerHTML = `<img src="img/${atual.imagem}">`;
        textoDiv.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
    }

    static Next() {
        Carousel._index++;
        if(Carousel._index >= Carousel._arr.length){
            Carousel._index = 0;
        }
        Carousel.Render()
    }

    static Prev() {
        Carousel._index--;
        
        if (Carousel._index < 0) {
            Carousel._index = Carousel._arr.length - 1;
        }
        
        Carousel.Render();
    }
};