import React,{useRef} from 'react';
import { TextInput, TextArea, Select, SelectItem, Button, Form } from 'carbon-components-react';

const FormComp = ({addIncident}) => {

  //refs para los campos del formulario
  const inpin = useRef();
const inpdesc = useRef();
const inpsel = useRef();
  
    return (
      
<div>
    <Form>
  <div style={{marginBottom: '2rem'}}>
    <TextInput
      id="incidente"
      invalidText="Incidente Invalido"
      labelText="Incidente"
      placeholder="Incidente"
ref={inpin}
/>
  </div>
  <div style={{marginBottom: '2rem'}}>
  <TextArea
    cols={50}
    id="description"
    invalidText="Descripcion invalida"
    labelText="Descripcion"
    placeholder="Descripcion"
ref={inpdesc}
    rows={4}
  />
  </div>
  <div style={{marginBottom: '2rem'}}>
    <Select
      id="select-1"
      invalidText="Seleccion invalida"
      labelText="Estado"
ref={inpsel}
>
      <SelectItem
        text="Abierto"
        value="Abierto"
      />
      <SelectItem
        text="Cerrado"
        value="Cerrado"
      />
      <SelectItem
        text="A Notificar"
        value="A Notificar"
      />
    </Select>
  </div>
  <Button
    kind="primary"
    tabIndex={0}
    onClick={()=>{addIncident(inpin.current.value,inpdesc.current.value,inpsel.current.value)}}
  >
    Submit
  </Button>
</Form>
  
</div>
    )
}

export default FormComp;