import { definePageConfig } from 'ice';

export default function Dashboard() {
  return <div>Index</div>;
}

export const pageConfig = definePageConfig(() => {
  return {
    auth: ['admin', 'user'],
    title: '工作台',
  };
});
