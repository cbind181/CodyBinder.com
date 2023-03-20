import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="layout">
          <h1>About</h1>
          <p className="abtp">
            Hi, I'm Cody! I'm a Software Engineer with a knack for several fields of tech, including cybersecurity, networking, systems administration, and, of course, software solutions engineering.
          </p>

          <h1>Contact</h1>
          <p className="abtp">
            Want to get in touch? Hit the mail tab down below and send me a message!
          </p>
        </div>

        <p className="footer">Copyright CodyBinder.com 2023 &copy;</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
