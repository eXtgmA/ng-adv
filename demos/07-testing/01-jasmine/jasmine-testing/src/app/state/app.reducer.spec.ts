import * as appActions from './app.actions';
import { appReducer, initialAppState } from './app.reducer';

describe('App Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'NOOP' } as any;
    const result = appReducer(initialAppState, action);
    expect(result).toBe(initialAppState);
  });

  it('should toggle the mock authenticated flag', () => {
    const action = appActions.toggleMockAuthenticated();
    const result = appReducer(initialAppState, action);
    expect(result.IsMockAuthenticated).toEqual(true);
  });

  it('should toggle the side nav visible flag', () => {
    const action = appActions.toggleSideNav();
    const result = appReducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should change the side nav visible flag', () => {
    const action = appActions.changeSideNavVisible({ visible: false });
    const result = appReducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should change the side nav position', () => {
    const action = appActions.changeSideNavPosition({ position: 'over' });
    const result = appReducer(initialAppState, action);
    expect(result.sideNavPosition).toEqual('over');
  });
});
