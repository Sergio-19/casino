import React from 'react'
import './homePage.scss'
import RightBlock from './rightBlock/RightBlock';
import LeftBlock from './leftBlock/LeftBlock';

import { GameCard } from '../../components/gameCard/GameCard';
import { Mask } from '../../components/UI/mask/Mask';
import { Modal } from '../../components/modal/Modal';
import { RecordBlock } from '../../components/recordBlock/RecordBlock'
import { ModalRecord } from '../../components/modalRecord/ModalRecord';
import { Denomination } from '../../components/denomination/Denomination';
import { Oferta } from '../../components/oferta/Oferta';






class Home extends React.Component{
    constructor(props){
        super(props);
    }
    


    

    renderCard(){
        let gameArray = this.props.games[this.props.activeGames];

        return(
            gameArray.map((img, i) =>{
            return(
               <GameCard
                key = {i} 
                img = {img}/> )}))
            }
    


    render(){

        return(
            <div className = "homePage">
            <Mask
                modalShow = {this.props.modalShow}
                modalRecordShow = {this.props.modalRecordShow}
                ofertaShow = {this.props.ofertaShow}
            />
            <Modal
            modalShow = {this.props.modalShow}
            modalType = {this.props.modalType}
            modalHide = {this.props.modalHide}
            />
            <Oferta
            ofertaShow = {this.props.ofertaShow}
            modalHide = {this.props.modalHide}
            />
            <ModalRecord
                modalRecordShow = {this.props.modalRecordShow}
                modalRecordHide = {this.props.modalRecordHide}
            />
            <Denomination
                denominationShow = {this.props.denominationShow}
                denomArray = {this.props.denomArray}
                rateHandler = {this.props.rateHandler}
            />
            <div className = "homePageWrap">
            <LeftBlock 
                belatra = {this.props.belatra}
                igrosoft = {this.props.igrosoft}
                mega = {this.props.mega}
                novomatic = {this.props.novomatic}
                play = {this.props.play}
                gameSearchHendler = {this.props.gameSearchHendler}
                activeGames = {this.props.activeGames}
            />
              <div className = "homePageContentDouble"></div>
                <div className = "homePageContent">
                <div className = "games">
              
                {this.renderCard()}
                </div>

               
                    {/* <div className = "homePageFoot">
                    <ButtonLight text = "Сохранить рекорд"/>
                    </div> */}
                
                </div>
                <RightBlock
                jackpot = {this.props.jackpot}
                poligon = {this.props.poligon}
                score = {this.props.score}
                denominationHandler = {this.props.denominationHandler}
                denominationShow = {this.props.denominationShow}
                denomination = {this.props.denomination}
                
                />  
            </div>
            <RecordBlock
               score = {this.props.score}
               modalRecordShow = {this.props.modalRecordShow}
               modalRecordShowHandler = {this.props.modalRecordShowHandler}
            />
            </div>
            
        )
    }
}


export default Home