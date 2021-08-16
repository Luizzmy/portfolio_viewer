import React, { useEffect, useState } from 'react'
import { getUserPortfolios, getPortfolioDetails, portfolioDelete } from '../services/portfolio'
import { List, Button, Skeleton } from 'antd';

function PortfoliosList() {
  const [initLoading, setInitLoading] = useState(true)
  // const [data, setData] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {

    /// Hook for retrieving all portfolios data from DB for the current user 
    async function getPortfolios() {
      setInitLoading(false)
      const { data } = await getUserPortfolios()
      console.log(data)
      // setData(data)
      setList(data)
    }
    getPortfolios()
  }, [])

  const handleEdit = async (id) => {
    console.log(id)
    const { data } = await getPortfolioDetails(id)
    sessionStorage.setItem('csvFile', JSON.stringify(data))
    window.location.reload()
    console.log(data)
  }

  const handleDelete = async (item) => {
    console.log(item)
    await portfolioDelete(item._id)
    const index = list.indexOf(item)
    const newData = list.filter((data, idx) => idx !== index)
    setList(newData)
  }

  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<Button type="link" key="list-loadmore-edit" onClick={() => handleEdit(item._id)} >edit</Button>,
            <Button type="link" key="list-loadmore-more" onClick={() => handleDelete(item)}>delete</Button>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                title={<p>{item.fileName}</p>}
              />

            </Skeleton>
          </List.Item>
        )}
      />

    </div>
  )
}

export default PortfoliosList
