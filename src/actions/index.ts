

export function changeInput(payload: string) {
  return { type: 'CHANGE_INPUT', payload }
};


export function fetchRepos(payload: string): {type: string, payload: string} {
  return { type: "DATA_REQUESTED", payload };
}