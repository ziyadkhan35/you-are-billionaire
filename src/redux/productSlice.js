import { createSlice } from "@reduxjs/toolkit/";

const productSlice=createSlice({
    name:'products',
    initialState:[
    {
        id:1,
        name:"Villa House of Poseidon, Petrcane",
        price:2000000,
        image:'https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1'
    },
    {
        id:2,
        name:"Chevrolet-Corvette-Stingray 2020",
        price:200000,
        image:"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
    },
    {
        id:3,
        name:" Apple Watch Series 7.45mm Midnight Sport Band",
        price:1300,
        image:"https://apple-azerbaijan.az/wp-content/uploads/2022/03/MKUQ3_VW_34FRwatch-45-alum-midnight-nc-7s_VW_34FR_WF_CO.jpg"
    },
    {
        id:4,
        name:"Isabel Bernard | 14 karat gold ring",
        price:50000,
        image:"https://cdn.webshopapp.com/shops/258875/files/320394918/isabel-bernard-le-marais-soleil-14-karat-gold-ring.jpg"
    },
    {
        id:5,
        name:"UK's Deadliest Garden",
        price:20000000,
        image:"https://ychef.files.bbci.co.uk/624x351/p0cqhccx.jpg"
    },
    {
        id:6,
        name:"SOJOS | Cat Eye Blue Light Blocking Glasses ",
        price:2000,
        image:"https://m.media-amazon.com/images/I/71IPuW2MPDL._AC_SY355_.jpg"
    },
    {
        id:7,
        name:"Honda | 2022 Boston Car",
        price:600000,
        image:"https://bdc2020.o0bc.com/wp-content/uploads/2018/02/Behind_the_Wheel_Manual_Transmission_80218-scaled.jpg"
    },
    {
        id:8,
        name:"Maseratti | 2020 Italian Luxury Car",
        price:750000,
        image:"https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/grecale/my22/modena/169/Maserati_Grecale_Modena_FULL_FRONT.jpg?$1920x2000$&fit=constrain"
    },
    {
        id:9,
        name:"Radisson Hotels Metropolitan Hotel Sofia",
        price:1000000000,
        image:"https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
    },
    {
        id:10,
        name:"McLaren 2020",
        price:70000000,
        image:"https://www.gannett-cdn.com/-mm-/bb1ec98fc576dc3a0ab84f85786cee9b45a415c3/c=0-183-4494-2722/local/-/media/2015/10/14/USATODAY/USATODAY/635804260125497432-AP-SWITZERLAND-GENEVA-MOTOR-SHOW-54577357.JPG"
    },
    {
        id:11,
        name:"By Joyalukkas 22k Gold Ring",
        price:30000000,
        image:"https://m.media-amazon.com/images/I/61Blzu9OwqL._UL1500_.jpg"
    }

    ],
    reducers:{

    }
})

export default productSlice.reducer