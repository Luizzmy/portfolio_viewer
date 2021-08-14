import React, {useState} from 'react'
import Papa from 'papaparse'
import {Col, Row, Typography, Button, Input} from 'antd'

import _ from "lodash";

const Upload = () => {
    const [state, setState] = useState({
      csvfile: null,
      tShirts: [null],
      felpe: [null]
    });
  
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
        console.log(csvfile)
    }
  
    function updateData(result) {
      setState({
        csvfile: null
      });
      var data = result.data;
      console.log(data);
      // var tshirts = _.map(data, function(o) {
      //   if (_.includes(o.stampa, "T-Shirt")) return o;
      // });
      // tshirts = _.without(tshirts, undefined);
  
      // var felpe = _.map(data, function(obj) {
      //   if (_.includes(obj.stampa, "Felpa")) return obj;
      // });
  
      // felpe = _.without(felpe, undefined);
  
      // setState({ tShirts: tshirts, felpe: felpe });
    }
  
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
      </div>
    );
  };
  
  export default Upload;