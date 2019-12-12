import router from '@/router';
import store from '@/store';
import {getToken} from '@/utils/auth';

import constant from '@/constant';

router.beforeEach(async (to, from, next) => {
  store.commit('closeDrawer');

  if (!to.path.startsWith('/admin')) {
    next();
  } else {
    // determine whether the user has logged in
    const hasToken = getToken();

    if (hasToken) {
      if (to.path === constant.LOGIN_PATH) {
        // if is logged in, redirect to the home page
        next({path: '/'})
      } else {
        next();
      }
    } else {
      /* has no token*/
      if (to.path === constant.LOGIN_PATH) {
        next()
      } else {
        next({path: `${constant.LOGIN_PATH}?redirect=${to.path}`});
      }
    }
  }
});
