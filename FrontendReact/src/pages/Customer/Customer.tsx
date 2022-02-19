import { IonButtons, IonButton, IonCard, IonCol,
   IonContent, IonGrid, IonHeader, IonItem, 
   IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } 
from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeCustomer, searchCustomers } from './CustomerAPI';
import CustomerInterface from './CustomerInterface';


const Customer: React.FC = () => {
  const [clientes, setClientes] = useState<CustomerInterface[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();



  useEffect(()=>{
    search();
  }, [history.location.pathname]);

  const search = async () =>{
    const customers = await searchCustomers();
    setClientes(customers);
  }

  const remove  =  async (id: string)=>{
    await removeCustomer(id);
    search();
  }

  const addCustomer = ()=>{
    history.push('/page/customers/new')
  }

  const editCustomer = (id: string)=>{
    history.push('/page/customers/'+id)
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
  <IonTitle>Customers Managment</IonTitle>
        
      
          <IonItem>
            <IonButton onClick={()=> addCustomer()} color="primary" fill="outline" slot="end" size="default">
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

        {clientes.map((client: CustomerInterface)=>
          <IonRow>
            <IonCol>{client.firstName} {client.lastName}</IonCol>
            <IonCol>{client.email}</IonCol>
            <IonCol>{client.phone}</IonCol>
            <IonCol>{client.address}</IonCol>
            <IonCol>
              <IonButton color="primary" fill='clear'
                onClick={()=>editCustomer(String(client.id))}
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

export default Customer;
