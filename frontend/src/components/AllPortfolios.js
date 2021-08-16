import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PortfoliosList from './PortfoliosList';


//// Porfolio Modal to contain all users portfolios stored in the DB
function AllPortfolios() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //// Renders component
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        View All Portfolios
      </Button>
      <Modal title="All portfolios"
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}>
        <PortfoliosList />
      </Modal>
    </div>
  )
}

export default AllPortfolios
