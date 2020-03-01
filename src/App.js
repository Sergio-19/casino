import React from 'react';
import './App.scss';
import Home from './containers/homePage/HomePage';
import { Header } from './components/header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import axios from 'axios'

//img import
import headBanner from "./images/headBanner.png"
import logo from "./images/LOGO1.png"

import banana from "./images/games/banana.png"
import bookOf from "./images/games/bookOf.png"
import corn from "./images/games/corn.png"
import dolphin from "./images/games/dolphin.png"
import monkey from "./images/games/monkey.png"

import belatra from "./images/left/belatra.png"
import igrosoft from "./images/left/igrosoft.png"
import mega from "./images/left/mega.png"
import jackpot from "./images/left/jackpot.png"
import novomatic from "./images/left/novomatic.png"
import play from "./images/left/play.png"
import poligon from "./images/left/poligon.png"





import Profile from './containers/profilePage/Profile';

 







// https://nge.su/json



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      denominationShow: false,
      modalShow: false,
      ofertaShow: false,
      modalRecordShow: false,
      score: 0,
      check: false,

      denomination: "1.00",
      denomArray: [ {rate: "1.00", id: "1.00"},
                    {rate: "0.01", id: "0.01"},
                    {rate: "0.05", id: "0.05"},
                    {rate: "0.10", id: "0.10"}, 
                    {rate: "0.50", id: "0.50"}, 
                    {rate: "2.00", id: "2.00"}, 
                    {rate: "5.00", id: "5.00"}, 
                    {rate: "10.00", id: "10.00"}, 
                    {rate: "100.00", id: "100.00"}],

      activeGames: "allGames",              

            games: {"allGames": [bookOf, corn, dolphin, monkey, banana, banana, monkey, corn, bookOf, dolphin,
                                corn, bookOf, banana, dolphin, monkey, bookOf, corn, dolphin, monkey, banana,
                                banana, monkey, corn, bookOf,dolphin, corn, bookOf, banana, dolphin, monkey,

                                corn, dolphin, monkey, banana, banana, monkey, corn, bookOf, dolphin,
                                corn, bookOf, banana, dolphin, monkey, bookOf, corn, dolphin, monkey, banana,
                                corn, dolphin, monkey, banana, banana, monkey, corn, bookOf, dolphin,
                                corn, bookOf, banana, dolphin, monkey, bookOf, corn, dolphin, monkey, banana,
                              
                              ],

                    "belatra": [bookOf, corn, dolphin, monkey, monkey, bookOf, corn, dolphin, monkey, banana,],

                    "Easy7": [monkey, corn, bookOf,dolphin, corn, dolphin, monkey, monkey,bookOf, banana,],

                    "igrosoft": [banana, banana, monkey, corn, bookOf, dolphin, corn, bookOf, banana, dolphin,],

                    "megaJack": [bookOf, corn, dolphin, monkey, banana, corn, bookOf,dolphin, corn, bookOf,],

                    "novomatic": [monkey, corn, bookOf,dolphin, corn, bookOf, banana, banana, monkey, corn,],

                    "playtech": [dolphin, monkey, banana, monkey, corn, bookOf,dolphin,bookOf, corn, banana],

                    "roulette": [monkey, bookOf, corn, dolphin, monkey, banana, monkey, corn, bookOf,dolphin, ],

                    "other": [banana, monkey, corn, bookOf,dolphin, corn, bookOf, banana, dolphin, monkey],
            }              
  }
    this.getRate()
  }

  //Функция чекбокса в профайле

  checkHandler = () =>{
    this.setState({check: !this.state.check})
  }

//Функция выборки игр по производителю

gameSearchHendler = (gameId) =>{

  this.setState({activeGames: gameId})
}

  
  getRate = () =>{
// console.log('work')
    // fetch('https://nge.su/json')
    // .then(data => {
       
    //   return data.json();
     
    // }).then(data => {console.log(data)})
  }


  async componentDidMount(){
    try{
        const response = await axios.get(`https://nge.su/json`); 
        const quiz = response.data
        console.log(quiz);
      }
      catch (e){
          console.log(e)
      }
    
    }
      //функция показа окна рекорды, скрывает блок сохранить рекорд
      modalRecordShowHandler = () =>{
        setTimeout( ()=>{
          this.setState({modalRecordShow: true})
        }, 300)}

        modalRecordHide = () =>{
          this.setState({ modalRecordShow: false  })
        }

//функция показа  окна (оферта, правила)

    modalShow = () =>{
      setTimeout( ()=>{
        this.setState({modalShow: true,})
      }, 300) }


      ofertaShow = () =>{
        setTimeout( ()=>{
          this.setState({ofertaShow: true,})
        }, 300) }

 //функции окна деноминация
 
 denominationHandler = () =>{
   this.setState({
                denominationShow: !this.state.denominationShow
                 })


 }

rateHandler = (rateId) =>{
  this.setState({
              denomination: rateId,
              denominationShow: !this.state.denominationShow
  })

}


    modalHide = () =>{
      this.setState({
        modalShow: false,
        ofertaShow: false
      })
    }


  render(){
    

    return (
      <BrowserRouter>
      
      <div className = "app">
        <Header 
          headBanner = {headBanner}
          logo = {logo}
          modalShow = {this.modalShow}
          ofertaShow = {this.ofertaShow}
        />

        <div className = "exp"></div>
        

      <div className = "content">
      <Switch>
      <Route path="/" exact render={(props) => <Home
        games = {this.state.games}
        activeGames = {this.state.activeGames}
        gameSearchHendler = {this.gameSearchHendler}

        belatra = {belatra}
        igrosoft = {igrosoft}
        mega = {mega}
        jackpot = {jackpot}
        novomatic = {novomatic}
        play = {play}
        poligon = {poligon}
        
        activeGames = {this.state.activeGames}
        modalShow = {this.state.modalShow}
        ofertaShow = {this.state.ofertaShow}
        modalHide = {this.modalHide}
        modalType = {this.state.modalType}
        score = {this.state.score}
        modalRecordShow = {this.state.modalRecordShow}
        modalRecordShowHandler = {this.modalRecordShowHandler}
        modalRecordHide = {this.modalRecordHide}
        denominationHandler = {this.denominationHandler}
        denominationShow = {this.state.denominationShow}
        denomination = {this.state.denomination}
        denomArray = {this.state.denomArray}
        rateHandler = {this.rateHandler}
         />}/>

        <Route path="/profile"  render={(props) => <Profile 
          ofertaShow = {this.ofertaShow }
          checkHandler = {this.checkHandler}
          check = {this.state.check}
        />}/>
       
      </Switch>
      
      </div>
      
      </div>
      
      </BrowserRouter>
    );
  }
 
}

export default App;
