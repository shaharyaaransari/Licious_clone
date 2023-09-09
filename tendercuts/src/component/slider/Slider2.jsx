import { Box, Heading, Icon, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useMediaQuery } from "@chakra-ui/react";

export default function ProductSlider1() {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForward />
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowPrevious />
      </div>
    );
  }
  function ArrowForward() {
    return (
      <Icon
        w="30px"
        h="50px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        fontSize="30px"
        ml="10px"
        as={GrCaretNext}
      />
    );
  }
  function ArrowPrevious() {
    return (
      <Icon
        w="30px"
        mr="10px"
        h="50px"
        fontSize="30px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        as={GrCaretPrevious}
      />
    );
  }

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const settings = {
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: isLargerThan768 ? 4 : 2,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let data = [
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b51398b-b07f-1a84-cce2-0c3ec19b153e/original/Goat---Mince.jpg?format=webp",
      title: "Goat Mince - Combo",
      price: 1142,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/60f91ea4-e9c9-9ac0-9825-3ce4cb507515/original/1598881046.5939--2020-08-3119_07_26--472.jpeg?format=webp",
      title: "Chicken Curry Cut(Small Pcs)- 500 gms and Chicken",
      price: 326,
    },
    {
      src:
        "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/34/prod_display_image/1634616967.0156--2021-10-1909:46:07--1818",
      title: "Assorted Kebab Platter | Ready to Cook",
      price: 939,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/1ebe21bf-dd69-7194-a13d-ab0e85704d1b/original/1598524707.9636--2020-08-2716_08_27--472.jpeg?format=webp",
      title: "Chicken Curry Cut (Small Pcs) - 500 gms and Chicken",
      price: 428,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/16a799ca-1867-b00b-9dce-3e5f0068eece/original/hot_chuncky@3x.jpg?format=webp",
      title: "Hot & Chunky Chicken Combo",
      price: 418,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/50400fef-0251-d6b6-5bb2-76fce5203784/original/fish.jpg",
      title: "Fish Fiesta Combo",
      price: 368,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f9de17db-1263-4d79-8600-477f07c24a6e/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
      title: "Chunky Shawarma Chicken Spread",
      price: 338,
    },
    {
      src:
        "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg",
      title: "Chicken Delight Combo - Indian",
      price: 454,
    },
  ];

  return (
    <Box className="product"  ml={{ base: "30px", md: "150px" }} width="80%">
      <Slider {...settings}>
        {data.map((items, i) => (
          <Box key={i} padding="20px">
            <Image className="imgP" src={items.src} alt={i + 1} borderRadius="20px" />
            <Heading as="h6" size="sm">
              {items.title}
            </Heading>
            <Heading as="" size="sm" color="red.500">
              ₹{items.price}
            </Heading>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
