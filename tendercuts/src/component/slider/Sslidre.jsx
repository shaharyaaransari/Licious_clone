import { Box, Icon, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"


export default function ProductSlider2() {
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
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/64335058-e299-94d6-e80b-f11001e5c02f/original/13.png"
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/bca0301a-d4f1-9d36-ccf5-ed5286e12b44/original/5_(2).png"
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/2adb54a9-dfeb-abfb-d393-836f362ca0d4/original/7_(3).png"
      
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/19e63819-69ce-1c0e-e847-a2c674190d5b/original/12_(2).png"
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/39cfb3b7-8633-133f-e99f-e9f1bab1d9a3/original/11_(2).png"

    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/401d721f-9ab9-8629-7d5c-5f203ca42eb8/original/10_(2).png"
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/b78ccb11-9f24-ec60-5ee9-11d6135828e8/original/2.png"
    },
    {
      src:"https://dao54xqhg9jfa.cloudfront.net/oms/011bac74-b244-a3a1-b500-0e3ebfdf742c/original/1_(2).png",
    }
    ]
    return (
      <Box className="product" ml="150px"  width="80%">
        <Slider {...settings}>
            {
              data.map((items ,i)=>(
                <Box key={i}  padding="20px">
                 
                  <Image className="imgP" src={items.src} alt={i+1}  borderRadius="20px" />
                 
                </Box>
              ))
            }
        </Slider>
      </Box>
    );
}