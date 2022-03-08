import React,{useState,useCallback} from 'react';

import FormComp from '../../components/FormComp/formComp';
import ResultTable from '../../components/ResultTable/resultTable';
import './_landing.scss';



const headerData = [
  {
    header: 'Incidente',
    key: 'incident',
  },
  {
    header: 'Descripcion',
    key: 'description',
  },
 
  {
    header: 'Estado',
    key: 'status',
  },
 
];

const rowData = [

];

const LandingPage = () => {
  const [rowDatap, changeData] = useState(rowData); //state para los datos de la tabla

  const addIncident = useCallback((incident,description,status) => {
    changeData(prevData => [...prevData, {
    incident: incident,
    id: Math.random(1,1000000),
    description: description,
    status: status,
  }]);
}, [changeData]); //callback para agregar datos a la tabla desde componente hijo


  return (
    <div className="bx--grid landing-page" >
      <div className="bx--row">
        <div className="bx--col-lg-16 " style={{margin: '2rem'}}>
          <FormComp addIncident={addIncident}></FormComp>
        </div>
        <div className="bx--col-lg-16 " style={{margin: '2rem',padding:'1rem'}}>
          <ResultTable headerData={headerData} rowData={rowDatap} />
        </div>

      </div>
    </div>
  );
};


export default LandingPage;
