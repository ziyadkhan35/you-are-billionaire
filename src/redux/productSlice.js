import { createSlice } from "@reduxjs/toolkit/";
import img1 from '../img/villa-poseidon.jpg'
import img2 from '../img/Chevrolet-Corvette.jpg'
import img3 from '../img/Apple Watch.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.png'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpeg'
import img11 from '../img/img11.jpg'
import img12 from '../img/porsche_911.jpg'


const productSlice=createSlice({
    name:'products',
    initialState:[
    {
        id:1,
        name:"Villa House of Poseidon, Petrcane",
        price:2000000,
        image:img1
    },
    {
        id:2,
        name:"Chevrolet-Corvette-Stingray 2020",
        price:200000,
        image:img2
    },
    {
        id:3,
        name:" Apple Watch Series 7.45mm Midnight Sport Band",
        price:1300,
        image:img3
    },
    {
        id:4,
        name:"Isabel Bernard | 14 karat gold ring",
        price:50000,
        image:img4
    },
    {
        id:5,
        name:"UK's Deadliest Garden",
        price:20000000,
        image:img5
    },
    {
        id:6,
        name:"SOJOS | Cat Eye Blue Light Blocking Glasses ",
        price:2000,
        image:img6
    },
    {
        id:7,
        name:"Honda | 2022 Boston Car",
        price:600000,
        image:img7
    },
    {
        id:8,
        name:"Maseratti | 2020 Italian Luxury Car",
        price:750000,
        image:img8
    },
    {
        id:9,
        name:"BMW Sport",
        price:100000,
        image:img9
    },
    {
        id:10,
        name:"Hotel in Dubai",
        price:7000000000,
        image:img10
    },
    {
        id:11,
        name:"By Joyalukkas 22k Gold Ring",
        price:30000000,
        image:img11
    },
    {
        id:12,
        name:"Porsche 911 Turbo S",
        price:150000,
        image: img12
    }

    ],
    reducers:{

    }
})

export default productSlice.reducer