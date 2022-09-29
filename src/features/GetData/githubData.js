export const getData = () => {
    const getData = fetch(
      "https://api.github.com/users/Jacob-Isaac/repos"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json());
  
    return getData;
  };