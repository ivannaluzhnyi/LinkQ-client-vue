<template>
    <div>
      <h1 class="font-weight-bold text-center display-3 basil--text py-10">REVIEWS</h1>
        <reviews-card :data="{ ...reviewsData }" />
    </div>
</template>

<script>
import ReviewsCard from "@/modules/Home/Components/ReviewsCard";
export default {
  name: "Reviews",
  components: { ReviewsCard },
  data: () => {
    return {
      reviewsData: [
        {
          name: "John Cena",
          initial:"JC",
          desc: "Une équipe très professionel",
          job:"Sportif professionnel",
          rate:4.5,
          place:"",
          avatar:"https://i.kym-cdn.com/photos/images/facebook/000/938/524/c60.jpg",
          link:"https://www.youtube.com/watch?v=9EPL_4HyCFQ",
        },
        {
          name: "John Wick",
          initial:"JW",
          desc: "Une équipe très professionel",
          job:"Acteur",
          rate:5,
          place:"",
          avatar:"https://avatarfiles.alphacoders.com/510/51068.jpg",
          link:"https://youtu.be/sAA405YVP64?t=216",
        },
         {
          name: "John Forgety",
          initial:"JF",
          desc: "Une équipe très professionel",
          job:"Auteur-compositeur-interprète",
          rate:4,
          place:"",
          avatar:"https://media.newyorker.com/photos/590971068b51cf59fc4226f9/master/pass/Abramovich-WhereJohnFogertysSongsComeFrom.jpg",
          link:"https://www.youtube.com/watch?v=J2NU2iYYM18",
        },
      ],
    };
  },
};
</script>
