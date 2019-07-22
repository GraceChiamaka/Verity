import {useRef, useEffect, useState} from 'react';

export function usePrevState(value){
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}


/* Control dialog box */
export function useDialog(){
  const [dialog, setDialog] = useState(false),
    [values,setValue] = useState({}),

    openDialog = (dialog='createNew',setStateData={})=>{
      setDialog(dialog);
      setValue({...values, ...setStateData});
    };

    return {
      dialog,
      dialogValue:values,
      openDialog
    };
}

/* Form input and submission control */
export function useForm(submit,defaultValues={}){
  const [values,setValue]=useState({...defaultValues}),

    handleChange = (e)=>{
      setValue({
        ...values,
        [e.target.id] : e.target.value
      });
    },

    handleCheck = (e)=>{
        setValue({
            ...values,
            [e.target.id] : e.target.checked
        });
    },

    handleFile = (e)=>{
        setValue({
            ...values,
            [e.target.id] : e.target.files[0]
        });
    },
    
    handleSubmit = (e)=>{
      e.preventDefault();
      submit();
    };

  return {
    values,
    handleChange,
    handleCheck,
    handleSubmit,
    handleFile
  }
}

export function useToast(){
  const [toastMessage, setToastMessage] = useState(void 0),
    toggleToast = (showToast=true)=>{
      setToastMessage(showToast);
    };

  return { toastMessage, toggleToast };
}