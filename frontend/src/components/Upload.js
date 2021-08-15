import React, {useState, useEffect} from 'react'
import Papa from 'papaparse'
import {Col, Row, Typography, Button, Input} from 'antd'
import { portfolioCreate } from '../services/portfolio';

import _, { result } from "lodash";
import Title from 'antd/lib/skeleton/Title';
import TablePortfolio from './TablePortfolio';

const Upload = () => {
    const [state, setState] = useState({
      csvfile: null,
      tShirts: [null],
      felpe: [null]
    });

    const [csvData, setcsvData] = useState(
      JSON.parse(sessionStorage.getItem('csvFile')) || ''
    );


    function handleChange(event) {
      setState({
        csvfile: event.target.files[0]
      });
    }
  
    function importCSV(e) {
      e.preventDefault();
      const { csvfile } = state;
  
      csvfile &&
        Papa.parse(csvfile, {
          header: true,
          dynamicTyping: true,
          complete: updateData
        });

    }

    async function updateData(result, file) {
      setState({
        csvfile: null
      });
      var data = result.data;


      const headers=Object.keys(data[0])
      let columns=[]
      let dataSource=[]
      headers.forEach(e => {
        columns.push({
          title:e,
          dataIndex:e,
          editable:true
        })
      });
      for(let i=0;i<data.length;i++){
        data[i]['key']=i
        dataSource.push(data[i])
      }
      console.log(dataSource)
      const res={
        fileName:file.name,
      header:columns,
      CSVData:dataSource
    }

    const newPortfolio= await portfolioCreate(res)
    console.log(newPortfolio)
    res._id=newPortfolio.data._id
    setcsvData(res)
    console.log(res)
    }

    useEffect(() => {
      if(csvData){
        sessionStorage.setItem('csvFile',  JSON.stringify(csvData));
      }
      console.log(csvData)
    }, [csvData]);

    console.log(sessionStorage)
  
    return (
      <div>
        <div className="upload">
          <Input
            type="file"
            name="file"
            placeholder={null}
            onChange={handleChange}
          />
          
          <p />
          
          <Button onClick={importCSV} type="primary">Upload a CSV File</Button>
        </div>
        {csvData ?
<TablePortfolio data={csvData}/>
        :
        null
        }
      </div>
    );
  };
  
  export default Upload;