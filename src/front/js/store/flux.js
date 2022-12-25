const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      store_token: "",
      message: "",
      resultados: "",
      token_local: localStorage.getItem("access_token"),
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
          "https://3001-unassignedbyte25-bemyre-o14q9rxad3p.ws-eu80.gitpod.io/api/signup",
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response));
      },
      login: async (email, password) => {
        await fetch("https://3001-unassignedbyte25-bemyre-o14q9rxad3p.ws-eu80.gitpod.io/api/login", {
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
              setStore({store_token: result.access_token})
              setStore({username: result.user_name})
              // navigate(`/${result.user_name}`);
            }
          })

      },

      //>>>>> Functions realted with signup and login

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back
      fetchUser: async(username) =>{
        await fetch("https://3001-unassignedbyte25-bemyre-o14q9rxad3p.ws-eu80.gitpod.io/api/pablo",{
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json"
          }
        })
        // .then((resp) => {
        //   if (resp.status == 200) {
        //     return resp.json();
        //   } else {
        //     return "Error en fetch";
        //   }
        // })
        .then((response)=> response.json())
        .then((result) => setStore({resultados: result}))


      }
      // <<<< Functions realted on fetching user info from back
    },
  };
};
export default getState;
