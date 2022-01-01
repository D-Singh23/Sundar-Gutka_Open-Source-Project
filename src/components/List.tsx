import { IonItem, IonLabel, IonList, IonIcon, IonTitle } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const List: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonList class='pun ui'>
        <IonItem routerLink='/japujee-sahib'>
          <IonLabel>ਜਪੁਜੀ ਸਾਹਿਬ</IonLabel>
        </IonItem>
        <IonItem routerLink='/tavai-pasad-svayiee'>
          <IonLabel>ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਯੇ</IonLabel>
        </IonItem>
        <IonItem routerLink='/Nasihatnama'>
          <IonLabel>ਨਸੀਹਤਨਾਮਾ</IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default List;