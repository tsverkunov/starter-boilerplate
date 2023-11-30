import {
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-products',
          path: `${APP_PREFIX_PATH}/main/catalog/products`,
          title: 'sidenav.main.catalog.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-category',
          path: `${APP_PREFIX_PATH}/main/catalog/category`,
          title: 'sidenav.main.catalog.category',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-collection',
          path: `${APP_PREFIX_PATH}/main/catalog/collection`,
          title: 'sidenav.main.catalog.collection',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/client`,
      title: 'sidenav.main.client',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-client-list',
          path: `${APP_PREFIX_PATH}/main/client-list`,
          title: 'sidenav.main.client.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-client-groups',
          path: `${APP_PREFIX_PATH}/main/client-groups`,
          title: 'sidenav.main.client.group',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-gift',
      path: `${APP_PREFIX_PATH}/main/gift`,
      title: 'sidenav.main.gift',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-shops',
      path: `${APP_PREFIX_PATH}/main/shops`,
      title: 'sidenav.main.shops',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-addresses',
          path: `${APP_PREFIX_PATH}/main/shop/addresses`,
          title: 'sidenav.main.shops.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-geozones',
          path: `${APP_PREFIX_PATH}/main/shop/geozones`,
          title: 'sidenav.main.shops.geozones',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mail',
      path: `${APP_PREFIX_PATH}/main/mail`,
      title: 'sidenav.main.mail',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'systems-settings',
      path: `${APP_PREFIX_PATH}/systems/settings`,
      title: 'sidenav.systems.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systems-mobile_app',
      path: `${APP_PREFIX_PATH}/systems/mobile_app`,
      title: 'sidenav.systems.mobile_app',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systems-changelog',
      path: `${APP_PREFIX_PATH}/systems/changelog`,
      title: 'sidenav.systems.changelog',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemsNavTree
]

export default navigationConfig;
