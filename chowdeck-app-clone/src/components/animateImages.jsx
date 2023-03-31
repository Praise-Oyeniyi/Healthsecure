import image1 from '../../public/Images/pickup-1.svg'
import image2 from '../../public/Images/pickup-2.svg';
import image3 from '../../public/Images/pickup3.svg';
import image4 from '../../public/Images/pickup4.svg';
import story1 from '../../public/Images/stories1.svg';
import story2 from '../../public/Images/stories2.svg';
import story3 from '../../public/Images/stories3.svg';
import tTesti1 from '../../public/Images/twitter1.svg';
import tTesti2 from '../../public/Images/twitter2.svg';
import tTesti3 from '../../public/Images/twitter3.svg';
import tTesti4 from '../../public/Images/twitter4.svg';
import tTesti5 from '../../public/Images/twitter5.svg';
import tTesti6 from '../../public/Images/twitter6.svg';
import tTesti7 from '../../public/Images/twitter7.svg';
import tTesti8 from '../../public/Images/twitter8.svg';
import tTesti9 from '../../public/Images/twitter9.svg';
import tTesti10 from '../../public/Images/twitter10.svg';
import FoodAnimate from '../../public/Images/animate-food.svg';
import FoodAnimate2 from '../../public/Images/animate-main2.svg';
import FoodAnimate3 from '../../public/Images/animate-main3.svg';
import FoodAnimate4 from '../../public/Images/animate-main4.svg';
import FoodAnimate5 from '../../public/Images/animate-main5.svg';
import aIcon from '../../public/Images/animate-41.svg';
import aIcon1 from '../../public/Images/animate-42.svg';
import aIcon2 from '../../public/Images/animate-43.svg';
import aIcon3 from '../../public/Images/animate-44.svg';
import aIcon4 from '../../public/Images/animate-45.svg';
import Try1 from '../../public/Images/customer-app.svg';
import Try2 from '../../public/Images/customer-app2.svg';
import Try3 from '../../public/Images/customer-app3.svg';
import Image from 'next/image';
import {FaMapMarkerAlt, FaTwitter} from 'react-icons/fa'
import NetworkT1 from '../../public/Images/network-icon1.svg';
import NetworkT3 from '../../public/Images/network-icon3.svg';




export const Images = [image1, image2, image3, image4, image1];

export const locations = ['Magrellos', 'Craving after dark', 'Gidi Burgers', 'Olawoyin BBQ', 'Pak Point', 'Cookie Nation Confectionary','Koko Place','Craving after dark', 'Gidi Burgers', 'Olawoyin BBQ','Magrellos', 'Craving after dark', 'Gidi Burgers', 'Olawoyin BBQ', 'Pak Point', 'Cookie Nation Confectionary','Koko Place','Craving after dark', 'Gidi Burgers', 'Olawoyin BBQ',]

export const Animate = [
    {
        id:1,
        mainImage: FoodAnimate,
        title: "Get started in 3",
        iconFour: aIcon,
        activeCircle: '#02C27F',
    },
    {
        id:2,
        mainImage: FoodAnimate2,
        title: "Download the app",
        iconFour: aIcon1,
        activeCircle: '#FFD1E2',
    },
    {
        id:3,
        mainImage: FoodAnimate3,
        title: "Explore categories",
        iconFour: aIcon2,
        activeCircle: '#000000',
    },
    {
        id:4,
        mainImage: FoodAnimate4,
        title: "Place your orders",
        iconFour: aIcon3,
        activeCircle: '#0C513F',
    },
    {
        id:5,
        mainImage: FoodAnimate5,
        title: "Enjoy your meals",
        iconFour: aIcon4,
        activeCircle: '#ED5E3B',
    },

]


export const Trying = [
    {
        id:1,
        header: "Try the App",
        text:"Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
        image: Try1,
    },
    {
        id:2,
        header: "All in One",
        text:"Unlock new levels of growth with seamless menu and orders management, multiple branches and team, easy payouts withdrawal and a lot more.",
        image: Try2,
    },
    {
        id:3,
        header: "Become a Champ",
        text:"Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.",
        image: Try3,
    }

]

export const stories = [
    {
        image:story1,
        title: "CHOWDECK JOINS Y COMBINATOR'S S'22 BATCH",
        story:'Chowdeck has been accepted to Y Combinator’s Summer Batch 2022, joining a league of extraordinary companies that are dis...',
    },
    {
        image:story2,
        title: "CHAMPIONS : KINGSLEY AGBINYA",
        story:'Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...',
    },
    {
        image:story3,
        title: "CHAMPIONS : ANTHONY AGAM",
        story:'Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.',
    },
];


export const faq = [
    {
        question: "What is Chowdeck?",
        answer:'Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: "What is Chowdeck wallet?",
        answer:'Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders.',
    },
    {
        question: "What is Chowscore?",
        answer:'Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.',
    },
    {
        question: "What is Service fee?",
        answer:'The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform.',
    },
    {
        question: "Why do we charge service fee?",
        answer:'A consumer fee that appears on the price breakdown at checkout on the Chowdeck app.',
    },
    {
        question: "What is Surge fee?",
        answer:'A surge fee is a dynamic flat fee applicable when order demand exceeds available driver supply and is added to your subtotal during checkout on the Chowdeck app. The surge fee is calculated by considering how many people want to order on Chowdeck and how many delivery drivers are on the road in a particular area to fulfil orders.',
    },
    {
        question: "What is Chowscore?",
        answer:'This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.',
    },
    {
        question: "What is Chowdeck wallet?",
        answer:'Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.',
    },
    {
        question: "What is Service fee?",
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo voluptatum iusto nesciunt tenetur, corporis, est consequatur deleniti cumque eligendi atque officiis quidem consequuntur non sed obcaecati minus nam? Aliquam?',
    },
    {
        question: "vWhat is Chowscore?",
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo voluptatum iusto nesciunt tenetur, quidem consequuntur non sed obcaecati minus nam? Aliquam?',
    },
]


export const TwitterTesti = [
    {
        id:1,
        image:tTesti1,
        testi:"Are we not going to talk about the byproduct of @chowdeck which is providing employment opportunities?Just a glimpse of them together on the street validates one of the reasons of building a product like that.Kudos to the team.",
        link:'',
        name:'Divine E. | Bank of S..',
        handle:'@heEgbunaDivine',
    },
    {
        id:2,
        image:tTesti2,
        testi:"Food!!!!!!! So excited that i can now order through @chowdeck on the island. Go team Chowdeck !!!!! https:t.co/0sr3bUid46",
        link:'',
        name:'THEAWAZI',
        handle:'@THEAWAZI',
    },
    {
        id:3,
        image:tTesti3,
        testi:"Chowdeck legit created a talent pipeline for its riders: takes the bikes off their hands and give them macbooks. The riders would handle each delivery diligently knowing that this bumps up their chances of becoming an associate. This company is definitely different.",
        link:'',
        name:'damilare dosunmu',
        handle:' @Taruk',
    },
    {
        id:4,
        image:tTesti4,
        testi:"I genuinely love @chowdeckA top app with with service",
        link:'',
        name:' Wine ',
        handle:' @RedWhinee',
    },
    {
        id:5,
        image:tTesti5,
        testi:"My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week!",
        link:'',
        name:'Teffy Billion Dollars',
        handle:'@Jegc_tola',
    },
    {
        id:6,
        image:'',
        testi:"Are we not going to talk about the byproduct of @chowdeck which is providing employment opportunities?Just a glimpse of them together on the street validates one of the reasons of building a product like that.Kudos to the team.",
        link:'',
        name:'Dollars',
        handle:'@dollz',
    },
    {
        id:7,
        image:tTesti10,
        testi:"I just discovered there's Chowdeck on web, and it looks great, works great too.",
        link:'',
        name:'Ife.',
        handle:'@IfeSobog',
    },
    {
        id:8,
        image:tTesti6,
        testi:"Chowdeck UX >>>>>>>",
        link:'',
        name:'Charles Dairo',
        handle:'@charles_dairo',
    },
    {
        id:9,
        image:tTesti7,
        testi:"You will order from Chowdeck and say yeah, i have about 20 minutes to get home. In 5 minutes, delivery man wii call to tell you that he is at your gate with your food.",
        link:'',
        name:' Chichi',
        handle:'@Chisom',
    },
    {
        id:10,
        image:tTesti8,
        testi:"My friend and I ordered smokey rice from Zikatrino  Delicacies on  @chowdeck. The meal was filling and mouth-watering. ",
        link:'',
        name:'POIEMA',
        handle:'@The_Ife_Girl',
    },
    {
        id:11,
        image:tTesti9,
        testi:"Chowdeck is the best Nigerian mobile app i have ever used. Yes, quote me anywhere",
        link:'',
        name:'FA',
        handle:'@victorfatanmi',
    },
    {
        id:12,
        image:'',
        testi:"Chowdeck is the best Nigerian mobile app i have ever used. Yes, quote me anywhere",
        link:'',
        name:'DD',
        handle:'@dada',
    },

]

export const animateThin =
<div className='flex gap-x-6 mb-10'>
    <div className="slider-thin-inner ">
        <Image 
        src={NetworkT1}
        alt='icon'
        width={20}
        height={20}
        />
        <h4>Quality meal choices</h4>
    </div>
    <div className="slider-thin-inner">
        <FaMapMarkerAlt size={20} color="#02C27F" />
        <h4 >Highly rated riders</h4>
    </div>
    <div className="slider-thin-inner">
        <Image 
        src={NetworkT1}
        alt='icon'
        width={20}
        height={20}
        />

        <h4>20/7 support for customers and vendors  </h4>
    </div>
    <div className="slider-thin-inner">
        <Image 
        src={NetworkT3}
        alt='icon'
        width={20}
        height={20}
        />
        <h4>Live updates on order</h4>
    </div>
    <div className="slider-thin-inner">
        <Image 
        src={NetworkT1}
        alt='icon'
        width={20}
        height={20}
        />
        <h4>Quality meal choices</h4>
    </div>
</div>