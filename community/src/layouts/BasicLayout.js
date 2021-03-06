/**
 * 2017-12-11 Glassay & Kidder
 * 主界面
 */

import React from 'react';
import { connect } from 'dva';
// import 'semantic-ui-css/semantic.min.css';
import { Layout, Avatar, Row, Button } from 'antd';
import { Link, Switch, Route } from 'dva/router';
import styles from './BasicLayout.less';
import Main from '../component/Main';
import Edit from '../component/Edit';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ main }) => {
  return (
    <div>
      <Layout className={styles.color}>
        <Header className={styles.header}>
          <Row type="flex" justify="space-between" align="middle">
            <Link to="/main">
              <div className={styles.title}>Todpole’Community</div>
            </Link>
            <Row type="flex" justify="space-between" align="middle" style={{ width: '14%', marginRight: '10%' }} >
              <Link to="/main/text">
                <Button icon="edit" type="primary" className={styles.button}>发帖</Button>
              </Link>
              <Avatar src={main.header} size="large" className={styles.icon} />
            </Row>
          </Row>
        </Header>
        <Content style={{ width: '60%', margin: 'auto' }} >
          <Switch>
            <Route path="/main/text" render={() => <Edit />} />
            <Route
              path="/main" render={() => <Main />}
            />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }} className={styles.footer}>
          华北电力大学科技学院论坛
        </Footer>
      </Layout>
    </div>
  );
};

export default connect(({ main }) => ({ main }))(MainLayout);
