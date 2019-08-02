export const giphifyQueryString = string => {
  return string.split(' ').join('+');
}

export const convertToSnakeCase = string => {
  return string.split('+').join('_');
}

export const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export const resetCurrentGifFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    const state = JSON.parse(serializedState);
    const currentGif = state.gif;
    const resetGif = { ...currentGif, gif: {}, weirdnessLevel: 0 };
    state.gif = resetGif;
    const serializedStateWithResetGif = JSON.stringify(state);
    localStorage.setItem('state', serializedStateWithResetGif);
  } catch (error) {
    console.error(error)
    return undefined;
  }
}

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error(error)
    return undefined;
  }
}