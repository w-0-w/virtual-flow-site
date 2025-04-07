import { definePageConfig } from 'ice';

const FeedbackNotFound = () => {
  return <div>404</div>;
};

export const pageConfig = definePageConfig(() => {
  return {
    title: '404',
  };
});

export default FeedbackNotFound;
