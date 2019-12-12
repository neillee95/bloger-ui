const errorRoutes = [
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/components/error/404')
  }
];

export default errorRoutes;
