// хранилище мутаций 
export default {
  setData(state, {path, value})
    {
      state[path] = JSON.parse(JSON.stringify(value));
    }
}