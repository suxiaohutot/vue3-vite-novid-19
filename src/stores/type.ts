export interface Total {
  continueDayZeroLocalConfirmAdd: number;
  heal: number;
  provinceLocalConfirm: number;
  adcode: string;
  showHeal: boolean;
  showRate: boolean;
  wzz: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
  nowConfirm: number;
  dead: number;
  highRiskAreaNum: number;
  confirm: number;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  wzz_add: number;
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
}

export interface Total2 {
  dead: number;
  showRate: boolean;
  provinceLocalConfirm: number;
  continueDayZeroConfirm: number;
  mtime: string;
  adcode: string;
  confirm: number;
  wzz: number;
  highRiskAreaNum: number;
  heal: number;
  showHeal: boolean;
  continueDayZeroConfirmAdd: number;
  continueDayZeroLocalConfirmAdd: number;
  nowConfirm: number;
  mediumRiskAreaNum: number;
}

export interface Today2 {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  wzz_add: string;
  local_confirm_add: number;
}

export interface Total3 {
  showHeal: boolean;
  mediumRiskAreaNum: number;
  showRate: boolean;
  heal: number;
  mtime: string;
  dead: number;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  nowConfirm: number;
  wzz: number;
  adcode: string;
  confirm: number;
  provinceLocalConfirm: number;
  grade: string;
}

export interface Child2 {
  name: string;
  adcode: string;
  date: string;
  today: Today2;
  total: Total3;
}

export interface Child {
  date: string;
  today: Today;
  total: Total2;
  children: Child2[];
  name: string;
  adcode: string;
}

export interface Today3 {
  confirm: number;
  isUpdated: boolean;
}

export interface AreaTree {
  total: Total;
  children: Child[];
  name: string;
  today: Today3;
}

export interface ChinaTotal {
  suspect: number;
  noInfect: number;
  local_acc_confirm: number;
  localConfirmAdd: number;
  mediumRiskAreaNum: number;
  nowConfirm: number;
  dead: number;
  heal: number;
  importedCase: number;
  localConfirmH5: number;
  localWzzAdd: number;
  nowLocalWzz: number;
  deadAdd: number;
  confirm: number;
  showLocalConfirm: number;
  showlocalinfeciton: number;
  noInfectH5: number;
  mtime: string;
  localConfirm: number;
  mRiskTime: string;
  nowSevere: number;
  highRiskAreaNum: number;
  confirmAdd: number;
}

export interface ChinaAdd {
  heal: number;
  suspect: number;
  importedCase: number;
  noInfectH5: number;
  confirm: number;
  dead: number;
  nowConfirm: number;
  nowSevere: number;
  noInfect: number;
  localConfirm: number;
  localConfirmH5: number;
}

export interface ShowAddSwitch {
  confirm: boolean;
  suspect: boolean;
  nowConfirm: boolean;
  nowSevere: boolean;
  importedCase: boolean;
  noInfect: boolean;
  localinfeciton: boolean;
  all: boolean;
  dead: boolean;
  heal: boolean;
  localConfirm: boolean;
}

export interface Diseaseh5Shelf {
  areaTree: AreaTree[];
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
}

export interface StatisGradeCityDetail {
  date: string;
  mtime: string;
  sdate: string;
  syear: number;
  wzz_add: string;
  province: string;
  dead: number;
  grade: string;
  confirm: number;
  heal: number;
  city: string;
  nowConfirm: number;
  confirmAdd: number;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  statisGradeCityDetail: StatisGradeCityDetail[];
}