import { Menu, Icon } from 'antd';
import React from 'react'
import {store} from '../../store/store'
import {createChangeContentAction} from '../../store/action/videoContent'
const { SubMenu } = Menu;
export default class LeftMenu extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>React</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="理论知识"
          style={{
            textAlign:"left"
          }}
          >
            <Menu.Item key="1"
            onClick={()=>{
              store.dispatch(createChangeContentAction("test"))
            }}
            >001 React基础</Menu.Item>
            <Menu.Item key="2">002 Redux   </Menu.Item>
            <Menu.Item key="3">003 React-Router   </Menu.Item>
            <Menu.Item key="4">004 React-Redux   </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="工程总结"
          style={{
            textAlign:"left"
          }}
          >
            <Menu.Item key="5">005 React打包</Menu.Item>
            <Menu.Item key="6">006 React-TypeScript</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
