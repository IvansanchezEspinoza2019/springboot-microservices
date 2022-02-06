import { IonButtons, IonButton, IonCard, IonCol,
   IonContent, IonGrid, IonHeader, IonItem, 
   IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } 
from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeVendor, searchVendors } from './VendorAPI';
import VendorInterface from './VendorInterface';


const Vendor: React.FC = () => {
  const [clientes, setClientes] = useState<VendorInterface[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();



  useEffect(()=>{
    search();
  }, [history.location.pathname]);

  const search =() =>{
    const Vendors = searchVendors();
    setClientes(Vendors);
  }

  const remove  = (id: string)=>{
    removeVendor(id);
    search();
  }

  const addVendor = ()=>{
    history.push('/page/vendors/new')
  }

  const editVendor = (id: string)=>{
    history.push('/page/vendors/'+id)
  }
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

<IonCard>
  <IonTitle>Vendors Managment</IonTitle>
        
      
          <IonItem>
            <IonButton onClick={()=> addVendor()} color="primary" fill="outline" slot="end" size="default">
              <IonIcon icon={add}></IonIcon>
              Add
            </IonButton>
          </IonItem>
  <IonGrid className="table">
      <IonRow >
        <IonCol>Name</IonCol>
        <IonCol>Email</IonCol>
        <IonCol>Phone</IonCol>
        <IonCol>Address</IonCol>
        <IonCol>Actions</IonCol>
      </IonRow>

        {clientes.map((client: VendorInterface)=>
          <IonRow>
            <IonCol>{client.firstName} {client.lastName}</IonCol>
            <IonCol>{client.email}</IonCol>
            <IonCol>{client.phone}</IonCol>
            <IonCol>{client.address}</IonCol>
            <IonCol>
              <IonButton color="primary" fill='clear'
                onClick={()=>editVendor(String(client.id))}
              >
                  <IonIcon icon={pencil} slot='icon-only'></IonIcon>
              </IonButton>

              <IonButton color="danger" fill='clear'
                onClick={() => remove(String(client.id))}
              >
                  <IonIcon icon={close} slot='icon-only'></IonIcon>
              </IonButton>
            </IonCol>
      </IonRow>
        )}
    </IonGrid>

    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Vendor;
