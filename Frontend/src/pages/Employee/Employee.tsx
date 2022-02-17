import { IonButtons, IonButton, IonCard, IonCol,
   IonContent, IonGrid, IonHeader, IonItem, 
   IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } 
from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeEmployee, searchEmployees } from './EmployeeAPI';
import EmployeeInterface from './EmployeeInterface';


const Employee: React.FC = () => {
  const [clientes, setClientes] = useState<EmployeeInterface[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();



  useEffect(()=>{
    search();
  }, [history.location.pathname]);

  const search = async  ()  =>{
    const employees =  await searchEmployees();
    setClientes(employees);
  }

  const remove  = async (id: string)=>{
    await removeEmployee(id);
    search();
  }

  const addemployee = ()=>{
    history.push('/page/employees/new')
  }

  const editemployee = (id: string)=>{
    history.push('/page/employees/'+id)
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
  <IonTitle>Employees Managment</IonTitle>
        
      
          <IonItem>
            <IonButton onClick={()=> addemployee()} color="primary" fill="outline" slot="end" size="default">
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

        {clientes.map((client: EmployeeInterface)=>
          <IonRow>
            <IonCol>{client.firstName} {client.lastName}</IonCol>
            <IonCol>{client.email}</IonCol>
            <IonCol>{client.phone}</IonCol>
            <IonCol>{client.address}</IonCol>
            <IonCol>
              <IonButton color="primary" fill='clear'
                onClick={()=>editemployee(String(client.id))}
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

export default Employee;
