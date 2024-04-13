export const paths = {
  institution: {
    home: {
      index: '/',
      about: '/about',
      contact: '/contact'
    },
    informations: {
      index: '/info',
      location: '/info/localizacao',
      history: '/info/historia',
      beliefs: '/info/beliefs',
      leadership: '/info/conheca-nossa-lideranca'
    },
    organizations: {
      index: '/organizations',
      ambassadors: '/organizations/embaixadores-do-rei',
      messengers: '/organizations/mensageiras-do-rei',
      youth: '/organizations/unijovem',
      mens: '/organizations/homens-cristaos-em-acao',
      womens: '/organizations/mulheres-cristas-em-acao',
      spaceFlight: '/organizations/espaco-voar'
    },
    Activities: {
      index: '/cultos',
      sundaySchool: '/cultos/escola-dominical',
      worship: '/cultos/culto-de-adoracao',
      prayer: '/cultos/reuniao-de-oracao',
      bibleStudy: '/cultos/estudo-biblico',
      youth: '/cultos/juventude',
      children: '/cultos/criancas'
    },
    conference: {
      index: '/conferencia',
      speakers: '/conferencia/palestrantes',
      schedule: '/conferencia/programacao',
      registration: '/conferencia/inscricao'
    }
  },
  library: {
    home: '/library',
    auth: {
      register: '/library/auth/register',
      login: {
        index: '/library/auth/login',
        forgotPassword: '/library/auth/login/forgot-password',
        resetPassword: '/library/auth/login/reset-password'
      },
      logout: '/library/auth/logout'
    },
    dashboard: {
      index: '/library/dashboard'
    },
    myAccount: {
      index: '/library/my-account',
      profile: '/library/my-account/profile'
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
      index: '/library/checkout',
      createOrder: '/library/checkout/order/create',
      confirm: '/library/checkout/order/:id/confirm'
    }
  }
};
