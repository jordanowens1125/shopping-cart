import auditt from "../Assets/car-images/Audi_TT.webp";
import blackchevcamaro from "../Assets/car-images/black-chevrolet-camaro.jpg";
import bmwz4 from "../Assets/car-images/BMW_Z4.jpg";
import bugatti_chiron from "../Assets/car-images/bugatti_chiron.webp";
import cayman from "../Assets/car-images/Porsche_718_Cayman_GT4_RS_4.webp";
import corvette from "../Assets/car-images/chevrolet_corvette_e_ray.jpg";
import goldPlatedLambo from "../Assets/car-images/Gold_Plated_Lamborghini_Aventador.jpg";
import huracan from '../Assets/car-images/huracan.webp'
import jaguar from "../Assets/car-images/jaguar_f_type_2dr.jpg";
import lexus from "../Assets/car-images/Lexus_LC_500_Inspiration_Series.webp";
import mazda from "../Assets/car-images/mazda_mx_5_miata.jpg";
import senna from "../Assets/car-images/McLaren_Senna.webp";
import nissan from "../Assets/car-images/nissan-gt-r.jpg";
import scion from "../Assets/car-images/Scion_FR_S_series.jpg";
import supra from "../Assets/car-images/supra-european-specification-prototype001-1651151397.jpg";
import turbo from "../Assets/car-images/Porsche_911_Turbo_S_Coupe_5.webp";

export const cars = [
  {
    id: 0,
    title: "Audit TT",
    price: 51000,
    image: auditt,
    details: "",
    category: "cars",
    src: "https://www.motortrend.com/uploads/2022/09/2023-Audi-TT-front-three-quarter-view-5.jpg",
  },
  {
    id: 1,
    title: "Black Chevrolet Camaro",
    price: 40000,
    image: blackchevcamaro,
    details: "",
    category: "cars",
    src: "https://images.hdqwalls.com/wallpapers/black-chevrolet-camaro-ag.jpg",
  },
  {
    id: 2,
    title: "BMW Z4",
    price: 42000,
    image: bmwz4,
    details: "",
    category: "cars",
    src: "https://cdn-ds.com/blogs-media/sites/641/2018/09/25080416/Photo-Gallery-of-the-2019-BMW-Z4-Interior-and-Exterior_o.jpg",
  },
  {
    id: 3,
    title: "Bugatti Chiron",
    price: 1500000,
    image: bugatti_chiron,
    details: "",
    category: "cars",
    src: "https://www.topgear.com/sites/default/files/2021/11/_Z3A7768.jpg",
  },
  {
    id: 4,
    title: "Porsche 718 Cayman",
    price: 64000,
    image: cayman,
    details: "",
    category: "cars",
    src: "https://www.motortrend.com/uploads/2021/11/2022-Porsche-718-Cayman-GT4-RS-4.jpg?fit=around%7C875:492.1875",
  },
  {
    id: 5,
    title: "Gold Plated Lamborghini Aventador",
    price: 550000,
    image: goldPlatedLambo,
    details: "",
    category: "cars",
    src: "https://www.carscoops.com/wp-content/uploads/2015/01/Lambo-Gold-1.jpg",
  },
  {
    id: 6,
    title: "Lamborghini Huracan EVO",
    price: 270000,
    image: huracan,
    details: "",
    category: "cars",
    src: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/2022/10_06/over/hura_evo_over_01_m.jpg",
  },
  {
    id: 7,
    title: "Chevrolet Corvette E-Ray",
    price: 105000,
    image: corvette,
    details: "",
    category: "cars",
    src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2024-chevrolet-corvette-e-ray-3lz-012-1673977695.jpg?crop=0.591xw:0.786xh;0.162xw,0.214xh&resize=1200:*",
  },
  {
    id: 8,
    title: "Lexus LC 500 Inspiration Series",
    price: 96000,
    image: lexus,
    details: "",
    category: "cars",
    src: "",
  },
  {
    id: 9,
    title: "Maza MX-5 Miata",
    price: 30000,
    image: mazda,
    details: "",
    category: "cars",
    src: "https://www.mazdausa.com/siteassets/vehicles/2023/mx-5-rf/build-and-price/trims/environmental-360s/club/jet-black/e360-my22-mx5-rf-club-jetblack-020.jpg",
  },

  {
    id: 10,
    title: "Nissa GT-R",
    price: 120000,
    image: nissan,
    details: "",
    category: "cars",
    src: "https://hips.hearstapps.com/hmg-prod/images/2023-nissan-gt-r-101-1671034165.jpg?crop=0.735xw:0.966xh;0.0163xw,0&resize=640:*",
  },
  {
    id: 11,
    title: "McLaren Senna",
    price: 1350000,
    image: senna,
    details: "",
    category: "cars",
    src: "https://mclaren.scene7.com/is/image/mclaren/Senna-Hero1920x1080:crop-16x9?wid=1980&hei=1114",
  },
  {
    id: 12,
    title: "Scion FR-S",
    price: 30000,
    image: scion,
    details: "",
    category: "cars",
    src: "https://doubleclutch.ca/wp-content/uploads/2015/02/DSC01041-1000x570.jpg",
  },
  {
    id: 13,
    title: "Toyota GR Supra",
    price: 45000,
    image: supra,
    details: "",
    category: "cars",
    src: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2021/05/HERO-2022-Supra-A91-CF-Windtunnel.jpg",
  },
  {
    id: 14,
    title: "Porsche 911 Turbo S",
    price: 175000,
    image: turbo,
    details: "",
    category: "cars",
    src: "https://www.motortrend.com/uploads/sites/5/2020/03/2021-Porsche-911-Turbo-S-Coupe-5.jpg",
  },
  //   { id: 15,
  //     title: "",
  //     price: 0,
  //     image : "",
  //     details: "",
  //     category: 'cars',
  //     src: "",
  //   },
];
