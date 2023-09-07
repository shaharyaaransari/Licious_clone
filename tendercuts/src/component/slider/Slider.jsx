import { Box, Heading, Icon, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"


export default function ProductSlider() {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowForward />
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowPrevious />
      </div>
    );
  }
  function ArrowForward(){
    return (
      <Icon  w="30px" h="50px" boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px" fontSize="30px" ml="10px" as={GrCaretNext} />
    )
  }
  function ArrowPrevious(){
    return (
      <Icon w="30px" mr="10px" h="50px"  fontSize="30px" boxShadow ="rgba(0, 0, 0, 0.35) 0px 5px 15px" as={GrCaretPrevious} />
    )
  }
  

  const settings = {
   
    
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

   };

  let data =[ 
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/957ac157-3d74-e687-f82f-121e0f2d66bc/original/Cripsy-Chicken-Wings-7Tag_(1).jpg?format=webp",
      title:"Crispy Chicken Wings",
      price: 99,
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be3f7cf2-9288-0026-a3f5-0711b6554abf/original/Goat-Mince_Keema--Hero-Shot.jpg",
      title:"Goat Mince/ Keema",
      price: 469,
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7c01addb-3cff-9c0a-fa68-d4d6d41de5f5/original/large.jpg",
      title:"Chicken Breast - Boneless",
      price: 369,
      
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9f8ebefe-9a70-49c8-efa0-9ce9838b446a/original/Sichuan-Chilli-Chicken.jpg?format=webp",
      title:"Creamy Afghani Chicken (Mini)",
      price: 469,
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ccf4dc1a-1ef3-62e1-18e3-7aa719861427/original/two.jpg?format=webp",
      title :"Chicken Curry Cut - Large Pieces (Large Pack)",
      price: 200,

    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c7eec6c9-5bda-e196-25a8-d715fef79818/original/Peppery-Chicken-Salami_(1).jpg?format=webp",
      title:"Peppery-Chicken-Salami",
      price: 230,
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f9de17db-1263-4d79-8600-477f07c24a6e/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
      title :"Chunky Shawarma Chicken Spread",
      price: 339,
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp",
      title:"Chicken MiniBites Boneless",
      price: 159,
    }
    ]
    return (
      <Box className="product" ml="150px"  width="80%">
        <Slider {...settings}>
            {
              data.map((items ,i)=>(
                <Box key={i}  padding="20px">
                 
                  <Image className="imgP" src={items.src} alt={i+1}  borderRadius="20px" />
                  <Heading as='h6' size='sm'>{items.title}</Heading>
                  <Heading as='' size='sm' color="red.500">₹{items.price}</Heading>

                </Box>
              ))
            }
        </Slider>
      </Box>
    );
}