import { createReducer, on } from '@ngrx/store';
import { CommentItem } from '../comment.model';
import { MarkdownEditorActions } from './editor.actions';

// State
export const editorFeatureKey = 'mdeditor';

export interface EditorState {
  comments: CommentItem[];
  loaded: boolean;
}

export const initialEditorState: EditorState = {
  comments: [],
  loaded: false,
};

// Reducer
export const editorReducer = createReducer(
  initialEditorState,
  on(MarkdownEditorActions.loadcommentssuccess, (state, action) => {
    return { ...state, comments: action.items, loaded: true };
  }),
  on(MarkdownEditorActions.savecommentssuccess, (state, action) => {
    //Notice to clone an Array we use [] instead of {}
    const clone = Object.assign([], state.comments) as Array<CommentItem>;
    let idx = clone.findIndex((c) => c.id == action.item.id);
    if (idx > -1) {
      clone[idx] = action.item;
    } else {
      clone.push(action.item);
    }
    return { ...state, comments: clone };
  }),
  on(MarkdownEditorActions.deletecommentssuccess, (state, action) => {
    const clone = Object.assign(
      [],
      state.comments.filter((c) => c.id != action.item.id)
    ) as Array<CommentItem>;
    return { ...state, comments: clone };
  }),
  on(
    MarkdownEditorActions.loadcommentsfailure,
    MarkdownEditorActions.savecommentsfailure,
    MarkdownEditorActions.deletecommentsfailure,
    (state, action) => {
      return { ...state };
    }
  )
);
