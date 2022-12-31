const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
      resultados: "",
      token_local: sessionStorage.getItem("access_token"),
      current_user: sessionStorage.getItem("current_user"),
      alert: "",
    },
    actions: {
      signUp: async (
        username,
        email,
        password,
        firstname,
        lastname,
        is_musician
      ) => {
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
            "is_musician": ${is_musician}
				}
				  `,
        };

        await fetch(`${process.env.BACKEND_URL}/api/signup`, options)
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else if (resp.status == 400) {
              sessionStorage.setItem("alert_signup", "Usuario registrado");
            }
            // else {
            //   return sessionStorage.setItem("alert_signup", "Registro incorrecto");
            // }
          })
          .then((response) => console.log(response));
      },
      login: async (email, password) => {
        const store = getStore();
        await fetch(`${process.env.BACKEND_URL}/api/login`, {
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
              return sessionStorage.setItem(
                "alert_login",
                "Email o password Incorrecto"
              );
            }
          })
          .then((result) => {
            if (result.access_token != undefined) {
              sessionStorage.setItem("access_token", result.access_token);
              sessionStorage.setItem("current_user", result.user_name);
              window.location.href = `/user/${result.user_name}`
              console.log("promise", result);
              setStore({
                store_token: result.access_token,
                logged: true,
              });
              console.log("store", store.current_user);
              console.log("must be true", store.logged);
              // navigate(`/${result.user_name}`);
            }
          });
      },
      logOut: async (access_token) => {
        const store = getStore();

        // const opts = {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${access_token}`,
        //   },
        // };
        // await fetch(`${process.env.BACKEND_URL}/api/logout`, opts)
        //   .then((response) => response.json())
        //   .then((response) => console.log(response));
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("current_user");
        setStore({
          token_local: null,
          logged: false,
        });
      },

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back
      fetchUser: async (username) => {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        };
        await fetch(`${process.env.BACKEND_URL}/api/${username}`, options)
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
