import * as React from 'react';
import { View, Button, Text, Image, navigateTo } from 'remax/one';
import styles from './index.less';

export default () => {

	const handleJump = () => {
		navigateTo({
			url: '/pages/about/index'
		})
	}

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始111热更新
        </View>
				<Button onTap={handleJump}>跳转</Button>
      </View>
    </View>
  );
};
