import { createAction, props } from '@ngrx/store';

export const toggleMockAuthenticated = createAction(
  '[App] toggleMockAuthenticated'
);

export const toggleSideNav = createAction('[Menu] toggleSideNavVisible');

export const changeSideNavVisible = createAction(
  '[Menu] changeSideNavVisible',
  props<{ visible: boolean }>()
);

export const changeSideNavPosition = createAction(
  '[Menu] changeSideNavPosition',
  props<{ position: string }>()
);
