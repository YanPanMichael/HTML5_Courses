function promBlock(props) {
  new Promise((resolve, reject) => {
    const props = {
      resolve, 
      reject,
    };
    fetchData(props);
  }).then((res) => {
    if(res.status === 'succeed') {
      console.log("succeed");
    }
  }, (err) => {
    console.log("fail", err);
  })
}

async function fetchData(props) {
  const { resolve, reject } = props;
  try {
    const result = await fetch();
    resolve(result.data);
  } catch (error) {
    reject(error);
  }
}