function promBlock(props) {
  const {resolve, reject} = props;
  new Promise(() => {
    resolve()
  })
}