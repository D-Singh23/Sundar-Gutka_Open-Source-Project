// This is the Open-Source Sundar Gutka project


// =========\\ 	          //=======\\     ||     ||\\    ||      //======\\     ||     ||
//  ||      ||           ||               ||     || \\   ||     ||              ||     ||
//  ||      ||           \\=======\\      ||     ||  \\  ||     ||     ====     ||=====||
//  ||      ||                    ||      ||     ||   \\ ||     ||      ||      ||     ||
// ========//           \\=======//       ||     ||    \\||     \\======||      ||     ||

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Settings from './pages/Settings';
import JapujeeSahib from './pages/Japujee-sahib';
import Nasihatnama from './pages/Nasihatnama';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TavaiPasadSvayiee from './pages/Tavai-parsad-svayiee';

setupIonicReact();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/Nasihatnama">
          <Nasihatnama />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/japujee-sahib">
          <JapujeeSahib />
        </Route>
        <Route exact path="/tavai-pasad-svayiee">
          <TavaiPasadSvayiee />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
