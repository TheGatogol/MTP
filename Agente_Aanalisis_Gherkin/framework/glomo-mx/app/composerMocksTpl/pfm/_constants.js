
const PRODUCT_TYPE_CREDIT_CARD = 'CREDIT_CARD';
const PRODUCT_TYPE_DEBIT_CARD = 'DEBIT_CARD';
const PRODUCT_TYPE_PREPAID_CARD = 'PREPAID_CARD';
const ACTIVATED = 'ACTIVATED';
const ACTIVE = 'ACTIVE';
// eslint-disable-next-line no-unused-vars
const OPERATIVE = 'OPERATIVE';
const OFF = 'OFF';

const pfmTooltipOrder = ['configurateProducts', 'incomes', 'expenses'];
const cardProductTypes = [PRODUCT_TYPE_CREDIT_CARD, PRODUCT_TYPE_DEBIT_CARD, PRODUCT_TYPE_PREPAID_CARD];
const cardValidStatuses = [OPERATIVE, OFF];
const accountValidStatuses = [ACTIVATED, ACTIVE];
const taxonomicGroupIndexes = {
  expenses: '2',
  incomes: '1',
  financialMovements: '3',
  otherTypes: '4'
};
const taxonomicGroupTitles = {
  '2': 'pfm-pfm-dashboard-gl-expense-title',
  '1': 'pfm-pfm-dashboard-gl-entry-title',
  '3': 'pfm-pfm-dashboard-gl-savings-title',
  '4': 'pfm-pfm-dashboard-gl-investments-title'
};

const dashboardPfmInitialize = {
  key: 'glomo.dashboard.pfm.initialize',
  value: true
};

const pageSizeContributions = 20;
const originType = 'PFM';
const createAccount = {
  accountType: '23',
  title: '0004',
  joint: 'SINGLE',
  accountLevel: 'N4B'
};
const documentsOperation =  [
  {
    name: 'metas-saving-goals-pdf-title',
    size: '128KB'
  }
];

const requestBBVAPlanDocumentparams = {
  'product.id': 'PASIVOS',
  'subproduct.id': 'PLAN'
};

const savingGoalsAlias = 'Plan';
const originApplication = 'SELF_DRIVEN';
const savingGoalsTransfer = true;
const periodDateSelfDriven = '2099-12-31';
const selfDrivenVisible = true;
const categories = {
  [201]: { name: 'glomo-aggregation-pfm-balances-category-home', icon: 'coronita:home', color: '#f7893b' },
  [202]: { name: 'glomo-aggregation-pfm-balances-category-purchaces-and-services', icon: 'coronita:supermarket', color: '#2dcccd' },
  [203]: { name: 'glomo-aggregation-pfm-balances-category-entertainment', icon: 'coronita:retirement', color: '#f8cd51' },
  [204]: { name: 'glomo-aggregation-pfm-balances-category-health-and-beauty', icon: 'coronita:health', color: '#fab3f0' },
  [205]: { name: 'glomo-aggregation-pfm-balances-category-education', icon: 'coronita:education', color: '#8f7ae5' },
  [206]: { name: 'glomo-aggregation-pfm-balances-category-transport-and-travel', icon: 'coronita:auto', color: '#b79e5e' },
  [207]: { name: 'glomo-aggregation-pfm-balances-category-public-administration', icon: 'coronita:build', color: '#e77d8e' },
  [208]: { name: 'glomo-aggregation-pfm-balances-category-associations-and-NGOs', icon: 'coronita:donation', color: '#b6a8ee' },
  [209]: { name: 'glomo-aggregation-pfm-balances-category-cash-and-payments', icon: 'coronita:cash', color: '#88ca9a' },
  [210]: { name: 'glomo-aggregation-pfm-balances-category-financial-services', icon: 'coronita:bank', color: '#1464a5' },
  [211]: { name: 'glomo-aggregation-pfm-balances-category-loans', icon: 'coronita:creditcard', color: '#02a5a5' },
  [212]: { name: 'glomo-aggregation-pfm-balances-category-insurances', icon: 'coronita:insurance2', color: '#5bbeff' },
  [213]: { name: 'glomo-aggregation-pfm-balances-category-others', icon: 'coronita:sales', color: '#d3d3d3' }
};

const entities = {
  '017': 'BBVAESMMXXX'
};

const actionsPfmSpherica = [
  {
    groupId: '1',
    actions: [
      { icon: 'sphericaSavings', label: 'pfm-categorization-detail-gl-action-goals', id: 'budgets' }
    ]
  },
  {
    groupId: '2',
    actions: []
  },
  {
    groupId: '3',
    actions: [
      { icon: 'sphericaInvestment', label: 'pfm-categorization-detail-gl-action-investments', id: 'investments' }
    ]
  }
];

const actionsPfm = [
  { icon: 'bbvaSavings', label: 'pfm-categorization-detail-gl-action-goals', id: 'budgets' }
];

module.exports = {
  actionsPfm,
  actionsPfmSpherica,
  cardProductTypes,
  cardValidStatuses,
  accountValidStatuses,
  dashboardPfmInitialize,
  taxonomicGroupIndexes,
  taxonomicGroupTitles,
  pfmTooltipOrder,
  originType,
  createAccount,
  savingGoalsAlias,
  originApplication,
  pageSizeContributions,
  documentsOperation,
  savingGoalsTransfer,
  periodDateSelfDriven,
  requestBBVAPlanDocumentparams,
  categories,
  entities,
  selfDrivenVisible
};

