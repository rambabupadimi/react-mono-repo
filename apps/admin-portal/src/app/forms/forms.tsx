import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormView from './form-view/form-view';
import styles from './forms.module.scss';
import { UserForm } from './state/form.model';
import { fetchUserFormDetails, getUserFromDetails } from './state/form.slice'; 
import * as FormActions from './state/form.slice';

/* eslint-disable-next-line */
export interface FormsProps {}

export function Forms(props: FormsProps) {

  const dispatch = useDispatch<any>();
  const formDetails = useSelector(getUserFromDetails)

  useEffect(() => {
    dispatch(fetchUserFormDetails());
    console.log('form details--',formDetails);
  },[]);

  const updateData=(data:any)=>{
    console.log(data);
    const request: UserForm = {
      ...data
    } 
    dispatch(FormActions.formActions.updateUserDetailsInLocal(request))
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to Forms!</h1>
     {formDetails &&  <FormView saveData={updateData} data = {formDetails} ></FormView> }
    </div>
  );
}

export default Forms;
