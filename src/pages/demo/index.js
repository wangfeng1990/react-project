import React from 'react';
import './index.less'
import { Card, Icon, Avatar, Divider } from 'antd';

const { Meta } = Card;

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>come on</h1>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    );
  }
}

export default Test;