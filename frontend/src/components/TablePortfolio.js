import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Col, Row, Typography } from 'antd';
import axios from 'axios'
import { portfolioUpdate } from '../services/portfolio';

const {Text}=Typography

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {   
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
          [dataIndex]: record[dataIndex],
        });
      };

      const save = async () => {
        try {
          const values = await form.validateFields();
          toggleEdit();
          handleSave({ ...record, ...values });
        } catch (errInfo) {
          console.log('Save failed:', errInfo);
        }
      };
  
let childNode = children;

if (editable) {
childNode = editing ? (
  <Form.Item
    style={{
      margin: 0,
    }}
    name={dataIndex}
    rules={[
      {
        required: true,
        message: `${title} is required.`,
      },
    ]}
  >
    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
  </Form.Item>
) : (
  <div
    className="editable-cell-value-wrap"
    style={{
      paddingRight: 24,
    }}
    onClick={toggleEdit}
  >
    {children}
    </div>
);
}

return <td {...restProps}>{childNode}</td>;
};

function replaceCommas(string) {
    const searchRegExp = /,/g;
    const replaceWith = '.';
    if(typeof string ==="string"){
        string= string.replace(searchRegExp, replaceWith);
    }
      return string
  }
  
  function findValue(o, value) {
    for (var prop in o) {
        if (o.hasOwnProperty(prop) && o[prop] === value) {
            return value;
        }
    }
    return null;
}


function TablePortfolio({data}) {

    console.log(data)
    const [tableData, settableData] = useState()
    const [totalPosition, setTotalPosition] = useState()
    const [change, setChange] = useState(false)




useEffect(() => {
    async function validateCurrency(dataArray){
        const { data } = await axios.get("https://openexchangerates.org/api/currencies.json")
        if(dataArray){
            dataArray.forEach(e=>{
                console.log(e.Currency)
                if(data.hasOwnProperty(e.Currency)){
                    e.Currency=data[e.Currency]
                }
                else if(findValue(data, e.Currency)){
                    e.Currency=findValue(data, e.Currency)
                    
                }else{
                    e.Currency="Not_a_currency"
                }
            })
            settableData(dataArray)
        }
    }
    

    validateCurrency(data.CSVData)
}, [data.CSVData])

useEffect(() => {
    function getTotalPostition(dataArray){
        if(tableData){
            console.log("algo paso aqui tambien")
            let res=0
            dataArray.forEach(e=>{
                const position=parseFloat(replaceCommas(e.Price))*parseFloat(replaceCommas(e.FXRate))*e.Holding
                res=res+position
            })
            setTotalPosition(res)
            
        }
        }

    getTotalPostition(tableData)
}, [tableData])

useEffect(() => {
async function updatePortfolio(){
    if(change){
        data.CSVData=tableData
        sessionStorage.setItem('csvFile',  JSON.stringify(data));
        const {_id,
      ...values}=data
      console.log(_id)
      console.log(values)
        await portfolioUpdate(_id, values)
        setChange(false)
      
    }

}
updatePortfolio() 
  }, [tableData, data, change]);
// data.header.push(      {
//     title: 'operation',
//     dataIndex: 'operation',
//     render: (_, record) =>
//       data.CSVData.length >= 1 ? (
//         <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//           <a>Delete</a>
//         </Popconfirm>
//       ) : null,
//   },)


//  const handleDelete = (key) => {
//       data.CSVData= data.CSVData.filter((item) => item.key !== key)
//   };
const handleAdd = () => {
    let newData={}
    for (let k in data.CSVData[0]){
        if(k==="key"){
            newData[k]=tableData.length
        } else if(k==="Price"|| k==="Holding" || k==="FXRate"){
            newData[k]=0
        } else {
            newData[k]="new_row"
        }
    }
    
      const addedRow = [...tableData, newData]
      settableData(addedRow)
  };
  const handleSave = async (row) => {
      const newData=[...tableData]
      const index=newData.findIndex((item)=>row.key===item.key)
      const item=newData[index]
      newData.splice(index, 1, {...item, ...row})
      settableData(newData)
      setChange(true)
  };

    const components = {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      };
      const columns = data.header.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
            ...col,
            onCell: (record) => ({
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: handleSave,
            }),
          };
        });      



    return (
        
        <div>
             <div style={{marginTop:"15px"}}>
                 <Row justify="space-between">
                     <Col>
        <Button
          onClick={handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
        </Col>
        <Col>
        <Text>Name of Portfolio: {data.fileName}</Text>
        </Col>
        <Col>
        {totalPosition ?
        <Text>Total portfolio value kr {totalPosition}</Text>        
    :
    null}
        
        </Col>
        </Row>
        {tableData ?
                <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={tableData}
                columns={columns}
                pagination={{pageSize:50}}
              />
        :
        null
    }

      </div>
            
        </div>
    )
}

export default TablePortfolio
