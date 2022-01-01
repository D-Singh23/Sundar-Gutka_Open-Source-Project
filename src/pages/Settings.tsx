import { IonButtons, IonContent, IonHeader,IonPage, IonText, IonTitle, IonToolbar, IonBackButton, IonLabel, IonSelect, IonSelectOption, IonList, IonItem, IonImg, IonIcon } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

type Logo = {
  src: string;
  text: string;
};
const logo = { src: '../assets/images/logo.svg'};



const Settings: React.FC = () => {
  var [textsize, settextsize] = useState<number>();
  

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar >
          <IonTitle>Settings</IonTitle>
          <IonButtons slot='start' >
            <IonBackButton defaultHref='/' />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <svg className='iosicon set-list-icon' viewBox="0 0 28 28" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M14.3076 20.2461C14.8877 20.2461 15.1953 20 15.3887 19.3848L16.373 16.6426H21.3916L22.3672 19.3848C22.5605 20 22.8682 20.2461 23.4482 20.2461C24.0635 20.2461 24.459 19.877 24.459 19.2969C24.459 19.0859 24.4238 18.9102 24.3447 18.6729L20.4424 8.16113C20.1787 7.42285 19.6865 7.0625 18.8867 7.0625C18.1221 7.0625 17.6211 7.42285 17.3662 8.15234L13.4463 18.7168C13.3672 18.9453 13.332 19.1299 13.332 19.3145C13.332 19.8945 13.7012 20.2461 14.3076 20.2461ZM16.874 15.0166L18.8604 9.30371H18.9131L20.8994 15.0166H16.874ZM4.4375 20.2197C4.89453 20.2197 5.17578 19.9824 5.34277 19.4375L5.97559 17.5479H9.39453L10.0186 19.4463C10.1855 20 10.4756 20.2197 10.9502 20.2197C11.4775 20.2197 11.8379 19.8857 11.8379 19.3848C11.8379 19.1826 11.7939 18.9805 11.7148 18.752L9.05176 11.6328C8.79688 10.9385 8.34863 10.6045 7.67188 10.6045C7.02148 10.6045 6.58203 10.9297 6.32715 11.6328L3.66406 18.752C3.58496 18.9629 3.54102 19.1914 3.54102 19.3848C3.54102 19.9033 3.88379 20.2197 4.4375 20.2197ZM6.39746 16.1768L7.5752 12.5117H7.76855L8.96387 16.1768H6.39746Z" /></svg>
            <svg className='mdicon set-list-icon' fill='primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/></svg>
            <IonLabel>Text Size</IonLabel>
            <IonSelect defaultValue="01" okText='Select' className="select" interfaceOptions='alert' interface="alert" value={textsize} onIonChange={e => settextsize(e.detail.value)} >
              <IonSelectOption value="1">Small</IonSelectOption>
              <IonSelectOption value="2">Medium</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <div className='warning'>
          <h2><svg width="20" height="20" viewBox="0 0 20 19"  xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.99121 11.1572C9.47266 11.1572 9.17383 10.8672 9.15625 10.3398L9.0332 5.9541C9.01562 5.40918 9.40234 5.03125 9.98242 5.03125C10.5449 5.03125 10.958 5.41797 10.9404 5.96289L10.7998 10.3398C10.7822 10.876 10.4922 11.1572 9.99121 11.1572ZM9.99121 14.1982C9.39355 14.1982 8.90137 13.7676 8.90137 13.1875C8.90137 12.6074 9.38477 12.1768 9.99121 12.1768C10.5889 12.1768 11.0723 12.6074 11.0723 13.1875C11.0723 13.7764 10.5801 14.1982 9.99121 14.1982Z"/></svg> WARNING <svg width="20" height="20" viewBox="0 0 20 19"  xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.99121 11.1572C9.47266 11.1572 9.17383 10.8672 9.15625 10.3398L9.0332 5.9541C9.01562 5.40918 9.40234 5.03125 9.98242 5.03125C10.5449 5.03125 10.958 5.41797 10.9404 5.96289L10.7998 10.3398C10.7822 10.876 10.4922 11.1572 9.99121 11.1572ZM9.99121 14.1982C9.39355 14.1982 8.90137 13.7676 8.90137 13.1875C8.90137 12.6074 9.38477 12.1768 9.99121 12.1768C10.5889 12.1768 11.0723 12.6074 11.0723 13.1875C11.0723 13.7764 10.5801 14.1982 9.99121 14.1982Z"/></svg>
          </h2><br />
          <h3>These settings will not work</h3><br />
          <h2>Under Deveplopment Yet</h2>
        </div>
        <div className='contact'>
          <IonTitle>Contact</IonTitle>
          <span>
            <svg className='iosicon' viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.0088 14.5771C14.3867 14.5771 14.7207 14.4014 15.1162 14.0059L22.7803 6.40332C22.4375 6.0957 21.8311 5.94629 20.9785 5.94629H6.80176C6.0459 5.94629 5.50977 6.08691 5.20215 6.36816L12.9014 14.0059C13.2881 14.4014 13.6309 14.5771 14.0088 14.5771ZM4.3584 19.8945L10.6777 13.6367L4.36719 7.40527C4.20898 7.68652 4.12109 8.15234 4.12109 8.81152V18.5234C4.12109 19.165 4.2002 19.6221 4.3584 19.8945ZM23.6416 19.8857C23.791 19.6133 23.8701 19.1562 23.8701 18.5234V8.81152C23.8701 8.16992 23.7822 7.7041 23.624 7.43164L17.3398 13.6367L23.6416 19.8857ZM7.0127 21.3887H21.1895C21.9629 21.3887 22.5078 21.2393 22.8242 20.9492L16.3906 14.5596L15.8457 15.0957C15.2393 15.6846 14.6592 15.9658 14.0088 15.9658C13.3584 15.9658 12.7695 15.6846 12.1631 15.0957L11.6182 14.5596L5.19336 20.9316C5.54492 21.2305 6.16016 21.3887 7.0127 21.3887Z"/></svg>
            <a href='mailto:dilpreetsinghaulakh@icloud.com'>dilpreetsinghaulakh@icloud.com</a>
          </span>
          <IonText><i>Alternative email</i></IonText>
          <span>
            <svg className='iosicon' viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M7.0127 21.3887H21.1895C22.8857 21.3887 23.8701 20.4043 23.8701 18.5234V8.81152C23.8701 6.93066 22.877 5.94629 20.9785 5.94629H6.80176C5.10547 5.94629 4.12109 6.92188 4.12109 8.81152V18.5234C4.12109 20.4043 5.11426 21.3887 7.0127 21.3887ZM13.0068 13.9707L6.6084 7.64258C6.73145 7.61621 6.87207 7.59863 7.02148 7.59863H20.9697C21.1279 7.59863 21.2686 7.61621 21.4004 7.65137L15.0107 13.9707C14.6416 14.3311 14.334 14.4893 14.0088 14.4893C13.6836 14.4893 13.376 14.3223 13.0068 13.9707ZM5.76465 8.93457L10.5459 13.6367L5.76465 18.3652V8.93457ZM17.4717 13.6367L22.2266 8.96094V18.3477L17.4717 13.6367ZM7.02148 19.7275C6.86328 19.7275 6.71387 19.71 6.58203 19.6836L11.6182 14.6914L12.0928 15.166C12.7344 15.79 13.3496 16.0537 14.0088 16.0537C14.6592 16.0537 15.2832 15.79 15.916 15.166L16.3994 14.6914L21.4268 19.6748C21.2861 19.71 21.1367 19.7275 20.9697 19.7275H7.02148Z"/></svg>
            <a href='mailto:dilsingh23aulakh@gmail.com'>dilsingh23aulakh@gmail.com</a>
          </span>
        </div>
        <div className='about'>
          <IonTitle>About</IonTitle>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M74.5,44A199.47,199.47,0,0,0,74.5,355Z"/><path d="M199.5,0a199,199,0,0,0-75,14.59V384.41a199,199,0,0,0,75,14.59C309.68,399,399,309.68,399,199.5S309.68,0,199.5,0Z"/></g></g></svg>
            <IonText>D Singh Studios</IonText>
          </span>
          <p>By Dilpreet Singh</p>
          <h3>Developed in Amritsar</h3>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;