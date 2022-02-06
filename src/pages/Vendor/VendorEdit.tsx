import { IonButtons, IonButton, IonCard, IonCol,
    IonContent, IonGrid, IonHeader, IonItem, 
    IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } 
 from '@ionic/react';
 import { add, checkmark, close, pencil } from 'ionicons/icons';
 import { useEffect, useState } from 'react'; 
 import { useHistory, useParams } from 'react-router';
 import { removeVendor, saveVendor, searchVendors } from './VendorAPI';
 import { findVendorById } from './VendorAPI';
import VendorInterface from './VendorInterface';
 
 const VendorEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string}>();
    const [Vendor, setVendor] = useState<VendorInterface>({});
    const history = useHistory()
 
   useEffect(()=>{
     search();
   }, []);
 
   const search =() =>{
      if (id !== 'new'){
        let  Vendor = findVendorById(id);
        setVendor(Vendor)
      }
   }

   const save = ()=>{
     saveVendor(Vendor)
     history.push("/page/vendors")
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
   <IonTitle> {id == 'new'? 'Add Vendor':"Edit Vendor"}</IonTitle>
         
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">First Name</IonLabel>
                    <IonInput onIonChange={ e => Vendor.firstName = String(e.detail.value)} 
                    value={Vendor.firstName}> </IonInput>
                </IonItem>
             </IonCol>

             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Last Name</IonLabel>
                    <IonInput onIonChange={ e => Vendor.lastName= String(e.detail.value)}
                    value={Vendor.lastName}> </IonInput>
                </IonItem>
             </IonCol>
        </IonRow>

        <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => Vendor.email = String(e.detail.value)}
                     value={Vendor.email}> </IonInput>
                    </IonItem>
             </IonCol>

             <IonCol>
             <IonItem>
                <IonLabel position="stacked">Address</IonLabel>
                    <IonInput onIonChange={ e => Vendor.address = String(e.detail.value)}
                    value={Vendor.address}> </IonInput>
                    </IonItem>
             </IonCol>
         </IonRow>
  
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput onIonChange={ e=> Vendor.phone = String(e.detail.value)}
                    value={Vendor.phone}> </IonInput>
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
 
 export default VendorEdit;
 