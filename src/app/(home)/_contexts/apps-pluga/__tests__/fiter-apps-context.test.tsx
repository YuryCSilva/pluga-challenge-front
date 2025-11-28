import AppsProvider from '@/src/app/(home)/_contexts/apps-pluga/apps-provider';
import { useFilterAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/filter-apps-context';
import { act, renderHook } from '@testing-library/react';
import appsMock from '@/src/app/(home)/_contexts/apps-pluga/__mocks__/appsMock';

describe('filterAppsContext', () => {
  let wrapper: React.FC;

  beforeEach(() => {
    wrapper = ({ children }: any) => (
      <AppsProvider appsResponse={appsMock}>{children}</AppsProvider>
    );
  });
  
  it('deve permitir acessar o context dentro do Provider', () => {
    const { result } = renderHook(() => useFilterAppsContext(), { wrapper });

    expect(result.current.filterNameApps).toBe('');
  });

  it('deve atualizar filterNameApps ao chamar handleFilterNameApps', () => {
    const { result, rerender } = renderHook(() => useFilterAppsContext(), {
      wrapper,
    });

    expect(result.current.filterNameApps).toBe('');

    act(() => {
      result.current.handleFilterNameApps('facebook');
    });

    rerender();

    expect(result.current.filterNameApps).toBe('facebook');
  });
});
