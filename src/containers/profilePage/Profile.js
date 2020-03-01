import React from 'react'
import './profile.scss'
import { ButtonLight } from '../../components/UI/buttonLight/ButtonLight';
import { Hr } from '../../components/UI/hr/Hr';
import {Link} from 'react-router-dom'
import { CustomCheck } from '../../components/UI/customCheck/CustomCheck';



class Profile extends React.Component{
    constructor(props){
        super(props);

    }



      

    render(){
        
        
        return(
            <div className = "profilePage">
                    <div className = "profile">
                        <div className = "profileHead">
                        <h2>Социальные опросы</h2>
                        <Hr/>   
                        </div>

                        <div className = "profileCheck">
                        <div>
                        <ButtonLight 
                        text = "Начать новый опрос"
                        />
                        <div className = "profileCheckContent">
                        <CustomCheck 
                                click = {this.props.checkHandler}
                                check = {this.props.check}
                                />&nbsp;&nbsp;&nbsp;

                            <p><span onClick = {this.props.checkHandler}>&nbsp;Я соглашаюсь с условиями 
                            </span><Link to = "/"><strong onClick = {this.props.ofertaShow}>&nbsp;публичной оферты</strong></Link></p>

                        </div>
                        
                        </div> 
                        </div>
                        <Hr/> 
                        <div className = "profileFoot">
                         
                           <div>
                             <p><strong>ООО «Ромашка»</strong><br/>ОГРН 1234567891011 ИНН 1234567891 КПП 123456789 Адрес: 100200, г. Москва, ул. Московская, д. 13 Тел.: +7 (495) 123-45-66</p>   
                               </div> 
                           
                        </div>

                         
                        
                
                        
                
                    </div>
            </div>
        )
    }
}


export default Profile
