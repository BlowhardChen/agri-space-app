export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Splash: undefined;
  PrivacyPolicy: undefined;
};

export type FieldStackParamList = {
  FieldList: undefined;
  FieldDetail: { fieldId: string };
};

export type TaskStackParamList = {
  TaskList: undefined;
  TaskDetail: { taskId: string };
};

export type ProfileStackParamList = {
  ProfileHome: undefined;
  Settings: undefined;
};

export type TabParamList = {
  FieldManagement: undefined;
  TaskManagement: undefined;
  Profile: undefined;
};