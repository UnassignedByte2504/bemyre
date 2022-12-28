const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
      resultados: "",
      token_local: localStorage.getItem("access_token"),
      current_user: ""
    },
    actions: {
      signUp: async (username, email, password, firstname, lastname) => {
        const isMusician = false;
        console.log(
          "hola he sido llamada",
          username,
          email,
          password,
          firstname,
          lastname
        );
        const options = {
          method: "POST",
          body: `{ 
            "user_name":"${username}",
            "email":"${email}",
            "password":"${password}",
            "first_name":"${firstname}",
            "last_name":"${lastname}",
            "is_musician": ${isMusician}
				}
				  `,
        };

        await fetch(
          "https://3001-unassignedbyte25-bemyre-l2qz0lmt7fu.ws-eu80.gitpod.io/api/signup",
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response));
      },
      login: async (email, password) => {
        const store = getStore();
        await fetch(
          "https://3001-unassignedbyte25-bemyre-l2qz0lmt7fu.ws-eu80.gitpod.io/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        )
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else {
              return "No se ha accecido";
            }
          })
          .then((result) => {
            if (result.access_token != undefined) {
              localStorage.setItem("access_token", result.access_token)
              localStorage.setItem("current_user", result.user_name);

              console.log("promise", result)
              setStore({
                store_token: result.access_token
              });
              console.log("store", store.current_user)

              // navigate(`/${result.user_name}`);
            }
          });
      },

      //>>>>> Functions realted with signup and login

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back
      fetchUser: async (username) => {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        };
        await fetch(
          `https://3001-unassignedbyte25-bemyre-l2qz0lmt7fu.ws-eu80.gitpod.io/api/${username}`,
          options
        )
          // .then((resp) => {
          //   if (resp.status == 200) {
          //     return resp.json();
          //   } else {
          //     return "Error en fetch";
          //   }
          // })
          .then((response) => response.json())
          .then((result) => setStore({ resultados: result }));
      },
      // <<<< Functions realted on fetching user info from back
    },
  };
};
export default getState;
