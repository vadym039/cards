
export interface HaderPathInterface {
  link: string,
  name: string,
}

export const privateHaderPath: Array<HaderPathInterface> = [
  {
    link: '/cards',
    name: 'Cards',
  }
];

export const publicHaderPath: Array<HaderPathInterface> = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/cards',
    name: 'Cards',
  },
];