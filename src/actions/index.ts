export const CHANGE_INPUT = 'CHANGE_INPUT';

export function changeInput(payload: string): {} {
  return { type: CHANGE_INPUT, payload }
};


export const FETCH_REPOS = 'FETCH_REPOS';

export function fetchRepos(payload: any): any {
  return function (dispatch: any): any {
    return fetch(`https://api.github.com/search/repositories?q=${payload}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: FETCH_REPOS, payload: json });
      });
  };
}