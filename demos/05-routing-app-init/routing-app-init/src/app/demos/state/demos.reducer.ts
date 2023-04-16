import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { DemoItem } from '../demo-base/demo-item.model';
import { DemoActions } from './demos.actions';


// State
export const demosFeatureKey = 'demos';

// internal entity structure
// interface EntityState<T> {
//   ids: string[];
//   entities: { [id: string]: T };
// }

export interface DemoState extends EntityState<DemoItem> {
  loaded: boolean;
  selected: DemoItem;
  filter: string;
}

export const demosAdapter: EntityAdapter<DemoItem> =
  createEntityAdapter<DemoItem>();

export const defaultDemoItemState: DemoState = {
  ids: [],
  entities: {},
  loaded: false,
  filter: '',
  selected: {
    id: 0,
    title: '',
    component: '',
    sortOrder: 0,
    visible: true,
    url: '',
    topicid: 1,
  },
};

export const initialState = demosAdapter.getInitialState(defaultDemoItemState);

// Reducer
export const demoReducer = createReducer(
  initialState,
  on(DemoActions.loaddemossuccess, (state, action) => {
    return demosAdapter.setAll(action.items, {
      ...state,
      loaded: true,
    });
  }),
  on(DemoActions.updatedemosuccess, (state, action) => {
    const item: Update<DemoItem> = {
      id: action.item.id,
      changes: { visible: action.item.visible },
    };
    return demosAdapter.updateOne(item, { ...state });
  }),
  on(DemoActions.deletedemosuccess, (state, action) => {
    return demosAdapter.removeOne(action.item.id, {
      ...state,
    });
  }),
  on(DemoActions.setselected, (state, action) => {
    return { ...state, selected: action.item };
  }),
  on(DemoActions.applyfilter, (state, action) => {
    return { ...state, filter: action.filter };
  }),
  on(DemoActions.updatedemofailure, DemoActions.deletedemofailure, DemoActions.loaddemosfailure, (state, action) => {
    return { ...state };
  }),
);
