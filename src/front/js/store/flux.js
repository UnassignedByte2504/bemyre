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
      currentPath: "",
      selected_settings: null,
      user_img_settings: {
        profile_img: sessionStorage.getItem("settings_profile_img")
          ? sessionStorage.getItem("settings_profile_img")
          : null,
        portrait_img: sessionStorage.getItem("settings_portrait_img")
          ? sessionStorage.getItem("settings_portrait_img")
          : null,
      },
      followers: undefined,
      following: undefined,
      reRender: 1,
      profileCardView: "default",
      loggedUsers: [],
      geo_api_key:'c9e7139f5e0b428c9c11c3c069fe8aea',
    },
    actions: {
      sendImgTest: async (img) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            img: img,
          }),
        };

        const response = await fetch(
          `${process.env.BACKEND_URL}/api/signup`,
          options
        );
        const data = await response.json();
        setStore({
          message: data.message,
          resultados: data.resultados,
        });
      },
      signUp: async (
        username,
        email,
        password,
        firstname,
        lastname,
        is_musician
      ) => {
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

        await fetch(`${process.env.BACKEND_URL}/api/signup`, options).then(
          (resp) => {
            if (resp.status == 200) {
              return resp.json();
            } else if (resp.status == 400) {
              sessionStorage.setItem("alert_signup", "Usuario registrado");
            }
            // else {
            //   return sessionStorage.setItem("alert_signup", "Registro incorrecto");
            // }
          }
        );
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
              sessionStorage.setItem("profile_img", result.profile_img);
              window.location.href = `/user/${result.user_name}`;
              setStore({
                store_token: result.access_token,
                logged: true,
              });
              // navigate(`/${result.user_name}`);
            }
          });
      },
      logOut: async (access_token) => {
        sessionStorage.clear();
        window.location.href = "/home";
        setStore({
          token_local: null,
          logged: false,
        });
      },

      //<<<<<Functions realted with signup and login

      // >>>> Functions realted on fetching user info from back
      fetchUser: async (username) => {
        const store = getStore();
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
      changePassword: async (username, password, new_password) => {
        const store = getStore();
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            new_password: new_password,
          }),
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/changepassword`,
          options
        )
          .then((response) => response.json())
          .then((window.location.href = `/user/${username}/ajustes`));
      },
      fetchFollowing: async (username) => {
        const store = getStore();

        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/following/${username}`,
          opts
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ following: result });
            sessionStorage.setItem("following_list", result.following);
          });
      },
      fetchFollowers: async (username) => {
        const store = getStore();

        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/followers/${username}`,
          opts
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ followers: result });
            sessionStorage.setItem("followers_list", result.followers);
          });
      },

      editInfoSettings: async (
        username,
        user_name,
        first_name,
        last_name,
        description
      ) => {
        const store = getStore();
        const options = {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_name: user_name,
            first_name: first_name,
            last_name: last_name,
            description: description,
          }),
        };
        await fetch(
          `${process.env.BACKEND_URL}/api/settings/${username}/editinfo`,

          options
        )
          .then((response) => response.json())
          .then((result) =>
            sessionStorage.setItem("cambios", "Información cambiada con éxito")
          );
      },


      // <<<< Functions realted on fetching user info from back
      //misc functions
      setLocation: (location) => {
        setStore({
          currentPath: location,
        });
      },
      setSelectedSettings: (settings) => {
        setStore({
          selected_settings: settings,
        });
      },
      preProfileImg: (profileImg) => {
        const store = getStore();
        setStore({
          user_img_settings: {
            profile_img: profileImg,
            portrait_img: store.user_img_settings.portrait_img,
          },
        });
      },
      prePortraitImg: (portraitImg) => {
        const store = getStore();
        setStore({
          user_img_settings: {
            profile_img: store.user_img_settings.profile_img,
            portrait_img: portraitImg,
          },
        });
      },
      setFollowers: (data) => {
        setStore({
          followers: data,
        });
      },
      setFollowing: (data) => {
        setStore({
          following: data,
        });
      },
      setReRender: () => {
        const store = getStore();
        let add = store.reRender + 1;
        setStore({
          reRender: add,
        });
      },
      setProfileCardView: (view) => {
        setStore({
          profileCardView: view,
        });
      },
      setLoggedUsers: (data) => {
        const store = getStore();
        setStore({
          loggedUsers: [...store.loggedUsers, data],
        });
        console.log("logged users", store.loggedUsers);
      },

      //misc functions
    },
  };
};
export default getState;
