import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>
        Want to get in touch? Fill out this quick form to send a
        short outreach email straight to my inbox, and I'll get back
        to you as soon as possible!
        </p>

        <h3>Reach Out</h3>

        <form>
          <label htmlFor="subject">Subject:</label><br/>
          <input type="text" id="subject" name="subject"/><br/>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/>
          <label htmlFor="comments">Comments:</label><br/>
          <input type="text" id="comments" name="comments"/><br/>
          <input type="checkbox" id="robot" name="robot" value="Robot"/>
          <label htmlFor="robot">I might be a robot</label>
        </form>
        <button>Submit</button>

        <h1>Feedback</h1>
        <p>
          How do you think I did? Fill out the form below and let me know!
        </p>

        <form id="feedbackForm" onSubmit="feedbackFormValidate(); countWords();">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name"/><br/>
          <label htmlFor="comments">Comments:</label><br/>
          <textarea name="message" id="message" rows="6" cols="30"></textarea> <br/>
          <label>Rating:</label>
          <input type="radio" id="1star" name="rating"/>
          <label htmlFor="1star">1 star</label>
          <input type="radio" id="2star" name="rating"/>
          <label htmlFor="2star">2 stars</label>
          <input type="radio" id="3stars" name="rating"/>
          <label htmlFor="3stars">3 stars</label>
          <input type="radio" id="4stars" name="rating"/>
          <label htmlFor="4star">4 stars</label>
          <input type="radio" id="5stars" name="rating"/>
          <label htmlFor="5stars">5 stars</label> <br/>
          <input type="checkbox" id="robot" name="robot" value="Robot"/>
          <label htmlFor="robot">I still might be a robot</label> <br/>
          <input type="submit" value="Send Feedback"/> <br/>
          <input type="reset" value="Reset Form"/>
        </form>

        <p className="footer">Copyright CodyBinder.com 2023 &copy;</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
