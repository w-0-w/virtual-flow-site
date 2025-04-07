import { defineAppConfig, defineDataLoader } from 'ice';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

export const dataLoader = defineDataLoader(async () => {
  return {
    //
  };
});
