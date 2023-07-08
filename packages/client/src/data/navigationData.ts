export interface navigationBarLink {
  label: string;
  to: string;
}

export const navigationBarData: navigationBarLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'patient list',
    to: '/patient-list/',
  },
  {
    label: 'marked patients',
    to: '/marked-patients/',
  },
];
