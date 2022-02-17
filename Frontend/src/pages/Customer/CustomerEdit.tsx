import { IonButtons, IonButton, IonCard, IonCol,
    IonContent, IonGrid, IonHeader, IonItem, 
    IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } 
 from '@ionic/react';
 import { add, checkmark, close, pencil } from 'ionicons/icons';
 import { useEffect, useState } from 'react'; 
 import { useHistory, useParams, useRouteMatch } from 'react-router';
 import { removeCustomer, saveCustomer, searchCustomers } from './CustomerAPI';
 import { findCustomerById } from './CustomerAPI';
import CustomerInterface from './CustomerInterface';
 
 const CustomerEdit: React.FC = () => {
    const { name } = useParams<{ name: string}>();
    const [customer, setCustomer] = useState<CustomerInterface>({});
    const history = useHistory()
    const routeMatch: any = useRouteMatch('/page/customers/:id')
    let id = routeMatch?.params?.id;
 
   useEffect(()=>{
     search();
   }, [history.location.pathname]);
 
   const search = async () =>{
     
      if (id === 'new'){
        setCustomer({})
        
      } else {
        let  customer = await findCustomerById(id);
        setCustomer(customer)
      }
   }

   const save = async ()=>{
     await saveCustomer(customer)
     history.push("/page/customers")
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
   <IonTitle> {id == 'new'? 'Add Customer':"Edit Customer"}</IonTitle>
         
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">First Name</IonLabel>
                    <IonInput onIonChange={ e => customer.firstName = String(e.detail.value)} 
                    value={customer.firstName}> </IonInput>
                </IonItem>
             </IonCol>

             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Last Name</IonLabel>
                    <IonInput onIonChange={ e => customer.lastName= String(e.detail.value)}
                    value={customer.lastName}> </IonInput>
                </IonItem>
             </IonCol>
        </IonRow>

        <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => customer.email = String(e.detail.value)}
                     value={customer.email}> </IonInput>
                    </IonItem>
             </IonCol>

             <IonCol>
             <IonItem>
                <IonLabel position="stacked">Address</IonLabel>
                    <IonInput onIonChange={ e => customer.address = String(e.detail.value)}
                    value={customer.address}> </IonInput>
                    </IonItem>
             </IonCol>
         </IonRow>
  
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput onIonChange={ e=> customer.phone = String(e.detail.value)}
                    value={customer.phone}> </IonInput>
                    </IonItem>
             </IonCol>
         </IonRow>

    <IonItem>
        <IonButton onClick={()=>save()} color="success" fill="outline" slot="end" size="default">
        <IonIcon icon={checkmark}></IonIcon>
            Save
        </IonButton>
    </IonItem>
  
 
     </IonCard>
       </IonContent>
     </IonPage>
   );
 };
 
 export default CustomerEdit;
 