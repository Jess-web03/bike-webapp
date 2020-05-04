import React, {useState} from 'react';
import { Trans } from 'react-i18next';
import EqualDivider from '../style/EqualDivider';
import Child from '../style/Child';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Footer from '../component/Footer';
import Eau from '../image/bouteilleColor.svg';
import Casque from '../image/casqueVelo.svg';
import Frein from '../image/frein.svg';
import Lumiere from '../image/lumiere.svg';
import Lunette from '../image/lunetteColor.svg';
import Sonette from '../image/sonette.svg';
import Jacket from '../image/jacketYellow.png';
import Gant from '../image/gant.svg';

import Pompe from '../image/pompeColor.svg';

import Go from '../image/GOok.svg';
import Stop from '../image/STOPok.svg';
import BikeRoute from '../image/bikeRoute.png';

import ParentKid from '../image/ParentKid4.svg';
import ParentKid1 from '../image/ParentKid5.svg';
import Parking from '../image/parkingVelo.svg';

import BikeType1 from '../image/bicycleRed.png';
import BikeType2 from '../image/bicycleSki.png';
import BikeType3 from '../image/bicycleRacer.png';
import BikeType4 from '../image/bikeChaise.png';

const Mecano = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => setModalVisible(false);
    const information = () => {
        setModalVisible(true);
    }
    return(
        <div>
             <Slide top>
            <h2>Mecano</h2>
            </Slide>
            <Slide left>
            <h3><Trans i18nKey='type' /></h3>
            </Slide>
            <h4>Clic to discover</h4>
            
     <div className="modal" style={{display: modalVisible ? "block" : "none", backgroundColor: "rgba(0,0,0,0.5)"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    
            <img src={BikeType1} alt="un vélo rouge" onClick={information} />
            <img src={BikeType2} alt="un vtt" onClick={information} />
            <img src={BikeType3} alt="un vélo de course" onClick={information} />
            <img src={BikeType4} alt="un vélo couché" onClick={information} />

        <div className="bigContainer">
            <div className="leftPart">
            <Slide left>
            <h3><Trans i18nKey='safety' /></h3>
            </Slide>

            <EqualDivider vertical>
                <Child> <img className="safety" src={Lumiere} alt="une lumière" /><span><Trans i18nKey='light' /></span></Child>
                <Child><img className="safety" src={Frein} alt="un frein" /><span><Trans i18nKey='brake' /></span></Child>
                <Child><img className="safety" src={Jacket} alt="une veste" /><span><Trans i18nKey='yellow' /></span></Child>
            </EqualDivider>
            </div>

            <div className="rightPart">
            <Slide left>
            <h3><Trans i18nKey='practice' /></h3>
            </Slide>
            <EqualDivider vertical>
                <Child><img className="safety" src={Casque} alt="un casque" /><span><Trans i18nKey='helmet' /></span></Child>
                <Child><img className="safety" src={Sonette} alt="une sonette" /><span><Trans i18nKey='bell' /></span></Child>
            </EqualDivider>
            </div>
            </div>

            <Slide left>
            <h3><Trans i18nKey='essential' /></h3>
            </Slide>
            <EqualDivider vertical>
                <Child><img id="water" src={Eau} alt="une bouteille d'eau" /><span><Trans i18nKey='water' /></span></Child>
            </EqualDivider>

        <div className="bigContainer">
            <div className="leftPart">
            <h4><Trans i18nKey='also' /></h4>
            <p><Trans i18nKey='think' /></p>
            <EqualDivider vertical>
                <Child><img className="safety" src={Lunette} alt="une paire de lunette" /><span><Trans i18nKey='glasses' /></span></Child>
                <Child><img className="safety" src={Gant} alt="une paire de gant" /><span><Trans i18nKey='glove' /></span></Child>
            </EqualDivider>
            </div>
    
            <div className="rightPart">
          <h4><Trans i18nKey='but' /></h4>
          <EqualDivider vertical>
                <Child><img id="pompe" src={Pompe} alt="une pompe" /><span><Trans i18nKey='pump' /></span></Child>
            </EqualDivider>
            </div>
        </div>  

            <EqualDivider vertical>
                <Child><img src={Go} alt="panneau go" /></Child>
                <p id="more"><Trans i18nKey='more' /></p>
                <Child><img src={Parking} alt="parking velo" /><span><Trans i18nKey='parking' /></span></Child>
                <Child><img src={BikeRoute} alt="panneau bike" /></Child>
            </EqualDivider>


          
          <div class="box">
            <div>
                <img src={ParentKid} alt="parent-enfant roulant ensemble" />
            </div>

            <div>
                <img src={ParentKid1} alt="parent-enfant roulant ensemble" />
            </div>
            </div>
            <Zoom left>
          <p className="motto join"><Trans i18nKey='together' /></p>
          
          <p className="motto join"><Trans i18nKey='join' /></p>
          </Zoom>
            <img src={Stop} alt="panneau stop" />
        <Footer />
        </div>
    )
}
export default Mecano;