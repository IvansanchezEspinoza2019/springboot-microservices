import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, hammer, hammerSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, people, peopleCircle, peopleCircleSharp, peopleSharp, trashOutline, trashSharp, trendingUp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Customers',
    url: '/page/customers',
    iosIcon: peopleCircle,
    mdIcon: people
  },
  {
    title: 'Employees',
    url: '/page/employees',
    iosIcon: hammerSharp,
    mdIcon: hammer
  },
  {
    title: 'Vendors',
    url: '/page/vendors',
    iosIcon: trendingUp,
    mdIcon: trendingUp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Personal Management System</IonListHeader>
          <IonNote>admin@personal-manage-sys.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
