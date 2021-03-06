export interface State {
  heaerActiveIndex: number;
  loginDialog: boolean;
  accountInfo: unknown;
  userInfo: unknown;
  isLogin: boolean;
}

// 本地存储容错处理
function faultTolerant(name: string) {
  if (localStorage.getItem(name) as string) {
    return JSON.parse(localStorage.getItem(name) as string);
  }
}

const state: State = {
  heaerActiveIndex: Number(localStorage.getItem('heaerActiveIndex')) || 0, // 头部导航选中
  loginDialog: false, // 登录对话框显隐
  accountInfo: faultTolerant('accountInfo') || {}, // 账户信息
  userInfo: faultTolerant('userInfo') || {}, // 用户信息
  isLogin: faultTolerant('isLogin') || false // 是否登录
};

export default state;
