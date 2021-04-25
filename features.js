window.onload = () => {
    axios
      .get("http://localhost:3000/")
      .then(() => {
              console.log(" Heyy Customer");
      })
      .catch((err) => {
        console.log(err);
      });
  };