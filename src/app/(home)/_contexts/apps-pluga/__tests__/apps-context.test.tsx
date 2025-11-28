import AppsProvider from '@/src/app/(home)/_contexts/apps-pluga/apps-provider';
import { renderHook } from '@testing-library/react';
import { useAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/apps-context';
import appsMock from '@/src/app/(home)/_contexts/apps-pluga/__mocks__/appsMock';

describe('appsContext', () => {
  let wrapper: React.FC;

  beforeEach(() => {
    wrapper = ({ children }: any) => (
      <AppsProvider appsResponse={appsMock}>{children}</AppsProvider>
    );
  });
  
  it('deve permitir acessar o context dentro do Provider', () => {
    const { result } = renderHook(() => useAppsContext(), { wrapper });

    expect(result.current.apps[0].app_id).toBe('item_1');
  });
});
