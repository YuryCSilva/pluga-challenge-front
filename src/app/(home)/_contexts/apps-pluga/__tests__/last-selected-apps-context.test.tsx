import AppsProvider from '@/src/app/(home)/_contexts/apps-pluga/apps-provider';
import { renderHook } from '@testing-library/react';
import appsMock from '@/src/app/(home)/_contexts/apps-pluga/__mocks__/appsMock';
import { useLastSelectedAppsContext } from '@/src/app/(home)/_contexts/apps-pluga/last-selected-apps-context';
import { localStorageService } from '@/src/shared/services/localStorage';

jest.mock('@/src/shared/services/localStorage');

beforeEach(() => {
  jest.clearAllMocks();
  (localStorageService.get as jest.Mock).mockReturnValue(appsMock);
});

describe('lastSelectedAppsContext', () => {
  let wrapper: React.FC;

  beforeEach(() => {
    wrapper = ({ children }: any) => (
      <AppsProvider appsResponse={appsMock}>{children}</AppsProvider>
    );
  });

  it('deve permitir acessar o context dentro do Provider', () => {
    (localStorageService.get as jest.Mock).mockReturnValue(null);
    
    const { result } = renderHook(() => useLastSelectedAppsContext(), {
      wrapper,
    });

    expect(result.current.lastSelectedApps.length).toEqual(0);
  });

  it('deve obter os ultimos valores de localStorage', () => {
    const { result } = renderHook(() => useLastSelectedAppsContext(), {
      wrapper,
    });

    expect(result.current.lastSelectedApps.length).toEqual(3);
  });
});
