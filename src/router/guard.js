import router from '@/router';
import store from '@/store';
import {getToken} from '@/utils/auth';

const loginPath = '/admin/login';

router.beforeEach(async (to, from, next) => {
  store.commit('closeDrawer');

  if (!to.path.startsWith('/admin')) {
    next();
  } else {
    // determine whether the user has logged in
    const hasToken = getToken();

    if (hasToken) {
      if (to.path === loginPath) {
        // if is logged in, redirect to the home page
        next({path: '/'})
      } else {
        next();
      }
    } else {
      /* has no token*/
      if (to.path === loginPath) {
        next()
      } else {
        next(`${loginPath}?redirect=${to.path}`);
      }
    }
  }
});
