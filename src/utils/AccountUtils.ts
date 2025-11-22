export enum InstitutionEnum {
  SBI = 'SBI',
  HDFC = 'HDFC',
  ICICI = 'ICICI',
  AXIS = 'AXIS',
  KOTAK = 'KOTAK',
  E_ACCOUNT = 'E-ACCOUNT',
  E_WALLET = 'E-WALLET',
  EMPTY = '',
}

export type Institution = {
  label: string;
  value: InstitutionEnum;
  disabled?: boolean;
  selected?: boolean;
};

export enum AccountTypeEnum {
  CURRENT = 'CURRENT',
  SAVINGS = 'SAVINGS',
  SALARY = 'SALARY',
  CASH = 'CASH',
  E_WALLET = 'E-WALLET',
  E_ACCOUNT = 'E-ACCOUNT',
  EMPTY = '',
}

export type AccountType = {
  label: string;
  value: AccountTypeEnum;
  disabled?: boolean;
  selected?: boolean;
};

export const institutions: Institution[] = [
  {
    label: 'Select Institution',
    value: InstitutionEnum.EMPTY,
    disabled: true,
    selected: true,
  },
  { label: 'State Bank of India (SBI)', value: InstitutionEnum.SBI },
  { label: 'HDFC Bank', value: InstitutionEnum.HDFC },
  { label: 'ICICI Bank', value: InstitutionEnum.ICICI },
  { label: 'Axis Bank', value: InstitutionEnum.AXIS },
  { label: 'Kotak Mahindra Bank', value: InstitutionEnum.KOTAK },
];

export const accountTypes: AccountType[] = [
  {
    label: 'Select Account Type',
    value: AccountTypeEnum.EMPTY,
    disabled: true,
    selected: true,
  },
  {
    label: 'Current',
    value: AccountTypeEnum.CURRENT,
  },
  {
    label: 'Savings',
    value: AccountTypeEnum.SAVINGS,
  },
  {
    label: 'Salary',
    value: AccountTypeEnum.SALARY,
  },
  {
    label: 'Cash',
    value: AccountTypeEnum.CASH,
  },
  {
    label: 'E-Wallet',
    value: AccountTypeEnum.E_WALLET,
  },
  {
    label: 'E-Account',
    value: AccountTypeEnum.E_ACCOUNT,
  },
];
