export const paths = {
  home: '/library/home',
  myAccount: {
    index: '/library/my-account',
    profile: '/library/my-account/profile'
  },
  auth: {
    register: '/library/auth/register',
    login: {
      index: '/library/auth/login',
      forgotPassword: '/library/auth/login/forgot-password',
      resetPassword: '/library/auth/login/reset-password'
    }
  },
  dashboard: {
    index: '/library/dashboard'
  },
  book: {
    index: '/library/book',
    create: '/library/book/create',
    edit: '/library/book/edit/:id',
    delete: '/library/book/delete/:id'
  },
  publisher: {
    index: '/library/publisher',
    create: '/library/publisher/create',
    edit: '/library/publisher/edit/:id',
    delete: '/library/publisher/delete/:id'
  },
  genrer: {
    index: '/library/genrer',
    create: '/library/genrer/create',
    edit: '/library/genrer/edit/:id',
    delete: '/library/genrer/delete/:id'
  },
  author: {
    index: '/library/author',
    create: '/library/author/create',
    edit: '/library/author/edit/:id',
    delete: '/library/author/delete/:id'
  },
  checkout: {
    order: '/library/checkout/order',
    confirm: '/library/checkout/order/:id/confirm'
  }
};
