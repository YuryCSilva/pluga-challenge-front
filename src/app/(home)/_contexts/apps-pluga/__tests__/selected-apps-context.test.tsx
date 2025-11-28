import AppsProvider from '@/src/app/(home)/_contexts/apps-pluga/apps-provider';
import { act, renderHook } from '@testing-library/react';
import appsMock from '@/src/app/(home)/_contexts/apps-pluga/__mocks__/appsMock';
import { useSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/selected-apps-context';
import { useLastSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/last-selected-apps-context';
import { localStorageService } from '@/src/shared/services/localStorage';

jest.mock('@/src/shared/services/localStorage');

beforeEach(() => {
  jest.clearAllMocks();
  (localStorageService.get as jest.Mock).mockReturnValue(null);
});

describe('selectedAppsContext', () => {
  let wrapper: React.FC;
  
  beforeEach(() => {
    wrapper = ({ children }: any) => (
      <AppsProvider appsResponse={appsMock}>{children}</AppsProvider>
    );
  });

  it('deve permitir acessar o context dentro do Provider', () => {
    const { result } = renderHook(() => useSelectedAppsContext(), { wrapper });

    expect(result.current.selectedApp).toBeNull();
  });

  it('deve atualizar selectedApp ao chamar handleSelectedApp', () => {
    const { result, rerender } = renderHook(() => useSelectedAppsContext(), {
      wrapper,
    });

    expect(result.current.selectedApp).toBeNull();

    act(() => {
      result.current.handleSelectedApp(appsMock[0]);
    });

    rerender();

    expect(result.current.selectedApp?.app_id).toBe('item_1');
  });

  it('deve atualizar o lastSelectedApp ao chamar o handleSelectedApp', () => {
    const { result, rerender } = renderHook(
      () => ({
        selected: useSelectedAppsContext(),
        last: useLastSelectedAppsContext(),
      }),
      { wrapper }
    );

    expect(result.current.last.lastSelectedApps).toEqual([]);

    act(() => {
      result.current.selected.handleSelectedApp(appsMock[0]);
    });

    rerender();

    act(() => {
      result.current.selected.handleSelectedApp(appsMock[1]);
    });

    rerender();

    expect(result.current.last.lastSelectedApps.length).toEqual(2);
  });
});
