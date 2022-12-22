const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
    },
    actions: {
      signUp: async (username, email, password, firstname, lastname) => {
        const options = {
          method: "POST",
          body: `{ 
				   "user_name":"${username}",
					"email":"${email}",
					"password":"${password}",
					"first_name":"${firstname}",
					"last_name":"${lastname}"
				}
				  `,
        };

        await fetch(
          "https://3001-unassignedbyte25-bemyre-vgc43hj0dnd.ws-eu79.gitpod.io/api/signup",
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response));
      },
      login: async (email, password) => {
        await console.log(email, password);
        await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else {
              return "No se ha accecido";
            }
          })
          .then((result) => {
            if (result.access_token != undefined) {
              localStorage.setItem("access_token", result.access_token);
              navigate(`/${result.user_name}`);
            }
          });
      },

      //>>>>> Functions realted with signup and login

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back

      // <<<< Functions realted on fetching user info from back
    },
  };
};
export default getState;
