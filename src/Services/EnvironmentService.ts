import Config from 'react-native-config';

const EnvironmentService = {
  ENV: Config.ENV,
  CLIENT_ID: Config.CLIENT_ID,
  CLIENT_SECRET: Config.CLIENT_SECRET,
  API: Config,
  codePushAndroidDeploymentKey: Config.CODE_PUSH_ANDROID_DEPLOYMENT_KEY,
  codePushIosDeploymentKey: Config.CODE_PUSH_IOS_DEPLOYMENT_KEY,
};

export default EnvironmentService
