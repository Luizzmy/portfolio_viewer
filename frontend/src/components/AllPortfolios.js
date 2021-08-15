import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PortfoliosList from './PortfoliosList';

function AllPortfolios() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = async () => {
        await
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
        <div>
                  <Button type="primary" onClick={showModal}>
        View All Portfolios
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <PortfoliosList/>
      </Modal>
            
        </div>
    )
}

export default AllPortfolios
