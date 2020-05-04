import { PageHeader, Button, Descriptions } from 'antd';
import React, { Component } from 'react'

export default class LeftMenu extends Component {
  render() {
    return (
      <div
    style={{
      backgroundColor: '#F5F5F5',
      
    }}
  >
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="videoList"
      subTitle="个人录制的关于前端的视频"
      extra={[
        <Button key="3">联系作者</Button>,
        <Button key="2">评论</Button>,
        <Button key="1" type="primary">
          进入主页
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
    )
  }
}


// import { Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';
// import React from 'react'
// const { SubMenu } = Menu;
// export default class HeaderMenu extends React.Component {
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   };

//   render() {
//     return (
//         <div style={{
//             width:"100%",height:"100%",
//             display:"flex",
//             justifyContent:"space-around",
//             alignItems:"flex-end"
//         }}>
//     <Menu 
//       onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//         <Menu.Item key="mail">
//           <Icon type="mail" />
//           Navigation One
//         </Menu.Item>
//         <Menu.Item key="app" disabled>
//           <Icon type="appstore" />
//           Navigation Two
//         </Menu.Item>
//         <SubMenu
//           title={
//             <span className="submenu-title-wrapper">
//               <Icon type="setting" />
//               Navigation Three - Submenu
//             </span>
//           }
//         >
//           <Menu.ItemGroup title="Item 1">
//             <Menu.Item key="setting:1">Option 1</Menu.Item>
//             <Menu.Item key="setting:2">Option 2</Menu.Item>
//           </Menu.ItemGroup>
//           <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup>
//         </SubMenu>
//         <Menu.Item key="alipay">
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             Navigation Four - Link
//           </a>
//         </Menu.Item>
//       </Menu>
//         </div>
//     );
//   }
// }