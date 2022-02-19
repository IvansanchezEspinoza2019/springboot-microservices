import { IonButtons, IonButton, IonCard, IonCol,
    IonContent, IonGrid, IonHeader, IonItem, 
    IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } 
 from '@ionic/react';
 import { add, checkmark, close, pencil } from 'ionicons/icons';
 import { useEffect, useState } from 'react'; 
 import { useHistory, useParams, useRouteMatch } from 'react-router';
 import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeAPI';
 import { findEmployeeById } from './EmployeeAPI';
import EmployeeInterface from './EmployeeInterface';

 
 const EmployeeEdit: React.FC = () => {
    const { name } = useParams<{ name: string}>();
    const [employee, setemployee] = useState<EmployeeInterface>({});
    const history = useHistory()
    const routeMatch: any = useRouteMatch('/page/employees/:id')
    let id = routeMatch?.params?.id;
 
   useEffect(()=>{
     search();
   }, [history.location.pathname]);
 
   const search =  async () =>{
      if (id === 'new'){
        setemployee({})
      } else {
        let  employee = await findEmployeeById(id);
        setemployee(employee)
      }
   }

   const save = ()=>{
     saveEmployee(employee)
     history.push("/page/employees")
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
   <IonTitle> {id == 'new'? 'Add employee':"Edit employee"}</IonTitle>
         
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">First Name</IonLabel>
                    <IonInput onIonChange={ e => employee.firstName = String(e.detail.value)} 
                    value={employee.firstName}> </IonInput>
                </IonItem>
             </IonCol>

             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Last Name</IonLabel>
                    <IonInput onIonChange={ e => employee.lastName= String(e.detail.value)}
                    value={employee.lastName}> </IonInput>
                </IonItem>
             </IonCol>
        </IonRow>

        <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => employee.email = String(e.detail.value)}
                     value={employee.email}> </IonInput>
                    </IonItem>
             </IonCol>

             <IonCol>
             <IonItem>
                <IonLabel position="stacked">Address</IonLabel>
                    <IonInput onIonChange={ e => employee.address = String(e.detail.value)}
                    value={employee.address}> </IonInput>
                    </IonItem>
             </IonCol>
         </IonRow>
  
         <IonRow>
             <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput onIonChange={ e=> employee.phone = String(e.detail.value)}
                    value={employee.phone}> </IonInput>
                    </IonItem>

                    <IonItem>
                    <IonLabel position="stacked">Salary</IonLabel>
                    <IonInput onIonChange={ e=> employee.salary = Number(e.detail.value)}
                    value={employee.salary}> </IonInput>
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
 
 export default EmployeeEdit;
 