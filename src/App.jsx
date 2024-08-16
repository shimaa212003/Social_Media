//import { useEffect,useState } from 'react'
import './App.css'

import Title from "./Components/Title/Title"
import SubTitle from './Components/SubTitle/SubTitle'
import CardTop from './Components/CardTop/CardTop'
import CardBottom from "./Components/CardBotton/CardBotton"
import ThemeProvider from './Components/Darkmode/Darkmode'
function App() {

  const arrayOfCardTop = [
    {
      numero: '1987',
      social: '@nathanf',
      followers: 'Followers',
      imagem:"./images/icon-facebook.svg" ,
      upSubscribers: '12 Today',
      color: '#028AE3',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '1044',
      social: '@nathanf',
      followers: 'Followers',
      imagem:"./images/icon-twitter.svg" ,
      upSubscribers: '99 Today',
      color: '#03A3ED',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '11K',
      social: '@realnathanf',
      followers: 'Followers',
      imagem:"./images/icon-instagram.svg" ,
      upSubscribers: '1099 Today',
      color: '#e24b91',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      numero: '8239',
      social: 'Nathan F.',
      followers: 'Subscribers',
      imagem: "./images/icon-youtube.svg" ,
      upSubscribers: '144 Today',
      color: '#D90427',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]

  const arrayOfCardBottom = [
    {
      nome: 'Page Views',
      followers: '87',
      imagem: "./images/icon-facebook.svg",
      upSubscribers: '3%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '52',
      imagem:"./images/icon-facebook.svg" ,
      upSubscribers: '2%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Likes',
      followers: '5462',
      imagem:"./images/icon-instagram.svg" ,
      upSubscribers: '2257%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Profile Views',
      followers: '52k',
      imagem: "./images/icon-instagram.svg",
      upSubscribers: '1375%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Retweets',
      followers: '117',
      imagem:"./images/icon-twitter.svg" ,
      upSubscribers: '303%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '507',
      imagem:"./images/icon-twitter.svg" ,
      upSubscribers: '553%',
      colorUpDonw: '#3ECEAE',
      donwup: '+'
    },
    {
      nome: 'Likes',
      followers: '107',
      imagem: "./images/icon-youtube.svg" ,
      upSubscribers: '19%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
    {
      nome: 'Total Views',
      followers: '1407',
      imagem: "./images/icon-youtube.svg" ,
      upSubscribers: '12%',
      colorUpDonw: '#E20C0C',
      donwup: '-'
    },
  ]








// const [ arrayOfCardTop,setArrayOfCardTop] =useState([])

// useEffect(()=>{
//   function CallApi(){
//     fetch("http://localhost:3000/followers")
//     .then((response)=>{
//       return response.json()
//     })
//     .then((finalResult) =>{
//       setArrayOfCardTop(finalResult)
//     })
//   }
//   CallApi()
// },[])


// const [ arrayOfCardBottom,setArrayOfCardBottom] =useState ([])

//   useEffect(()=>{
//     function CallApi(){
//       fetch("http://localhost:3000/engagement")
//       .then((response)=>{
//         return response.json()
//       })
//       .then((finalResult) =>{
//         setArrayOfCardBottom (finalResult)
//       })
//     }
//     CallApi()
//   },[])



  return (
    <div className='App'>
    <ThemeProvider>
      <Title />

        {arrayOfCardTop.map(cardTop =>
         <CardTop
          key={cardTop.imagem}
          numero={cardTop.numero}
          social={cardTop.social}
          followers={cardTop.followers}
          imagem={cardTop.imagem}
          upSubscribers={cardTop.upSubscribers}
          color={cardTop.color}
          colorUpDonw={cardTop.colorUpDonw}
          donwup={cardTop.donwup}
        />)}
           <SubTitle />

{arrayOfCardBottom.map(cardBottom =>
 <CardBottom
  key={cardBottom.followers}
  nome={cardBottom.nome}
  followers={cardBottom.followers}
  imagem={cardBottom.imagem}
  upSubscribers={cardBottom.upSubscribers}
  colorUpDonw={cardBottom.colorUpDonw}
  donwup={cardBottom.donwup}
/>)}

</ThemeProvider>
    </div>
  )
}

export default App
